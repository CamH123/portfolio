import { useState } from "react"
import { useFormStatus } from "react-dom";
import { useNavigate } from "react-router";
import styles from "./Login.module.css"

function LoginButton(){
    const{pending} = useFormStatus();
    return(
        <button type = "submit" disabled = {pending} className = {styles.submitButton}>
            {pending ? "Logging In..." : "Login"}
        </button>
    );
}


export function Login(){
    // error state
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // form handler
    async function handleLogin(formData: FormData){
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;

        // validate inputs
        if (!username || !password){
            setError('Username and password are required');
            return;
        }

        // clear errors
        setError('');

        const API_URL = import.meta.env.VITE_API_URL;
        try{
            // login api call
            const response = await fetch (`${API_URL}/api/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, password}),
                credentials: 'include',
            });
            // 2. Parse response
            const data = await response.json();

            // 3. Handle errors
            if (!response.ok) {
                setError(data.error || 'Login failed');
                return;
            }

            // 4. Verify authentication
            const checkResponse = await fetch(`${API_URL}/api/admin/check`, {
                method: 'GET',
                credentials: 'include',
            });

            if (!checkResponse.ok) {
                setError('Authentication verification failed');
                return;
            }

            // 5. Success! Navigate to dashboard
            navigate('/admin/dashboard');
            
        } catch (err) {
            console.error('Login error:', err);
            setError('An unexpected error occurred. Please try again.');
        }
    }


    return(
        <>
            <div className = {styles.header}>
                <button className = {styles.headerText}
                    onClick = {() => navigate("/blog")}>
                    blog
                </button>   
                <button className = {styles.headerText}
                    onClick = {() => navigate("/")}>
                    portfolio
                </button>
            </div>
            <div className = {styles.loginPage}>
                <div className = {styles.loginBox}>
                    <div className = {styles.loginBoxTitle}>
                        admin login
                    </div>
                    <form action = {handleLogin} className = {styles.form}>
                        <div className = {styles.formGroup}>
                            <label htmlFor = "username" className = {styles.label}>
                                Username
                            </label>
                            <input 
                                id = "username"
                                name = "username"
                                type = "text"
                                className = {styles.input}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password" className={styles.label}>
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className={styles.input}
                                required
                            />
                        </div>

                        {error && <div className={styles.error}>{error}</div>}

                        <LoginButton />
                    </form>
                </div>
            </div>
        </>
    )
} 