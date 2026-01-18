import styles from "./Dashboard.module.css"
import { useNavigate } from "react-router"
import { useState } from "react"

import Add from "./components/Add";
import Edit from "./components/Edit";
import Home from "./components/Home";
import View from "./components/View";

export default function DashBoard(){
    const [section, setSection] = useState("home");
    const navigate = useNavigate();

    // Logout handler
    async function logoutHandler(){
        // call logout api
        const API_URL = import.meta.env.VITE_API_URL;
        try{
            // login api call
            const response = await fetch (`${API_URL}/api/admin/logout`, {
                method: 'POST',
                credentials: 'include'
            });

            if (!response.ok){
                throw new Error(`Logout failed: ${response.status}`);
            }

            // navigate back to login page
            navigate('/admin/login');
        }
        catch (err){
            console.error('Logout error:', err);
        }
    }

    return(
        <>
            <div className = {styles.header}>
                <div className = {styles.headerTitle}>
                    admin panel
                </div>
                <div className = {styles.routerTitles}>
                    <button className = {styles.routeButton}
                        onClick = {() => navigate("/blog")}>
                        blog
                    </button>
                    <button className = {styles.routeButton}
                        onClick = {() => navigate("/")}>
                        portfolio
                    </button>
                    <button className = {styles.routeButton}
                        onClick = {() => logoutHandler()}>
                        logout
                    </button>
                </div>
            </div>
            <hr className = {styles.headerLine}></hr>
            <div className = {styles.mainSection}>
                <div className = {styles.navColumn}>
                    <button className = {`${styles.sideButton} ${section==="home" ? styles.active : ''}`}
                        onClick = {() => setSection("home")}>
                        home
                    </button>
                    <button className = {`${styles.sideButton} ${section==="add" ? styles.active : ''}`}
                        onClick = {() => setSection("add")}>
                        add
                    </button>
                    <button className = {`${styles.sideButton} ${section==="edit" ? styles.active : ''}`}
                        onClick = {() => setSection("edit")}>
                        edit
                    </button>
                    <button className = {`${styles.sideButton} ${section==="view" ? styles.active : ''}`}
                        onClick = {() => setSection("view")}>
                        view
                    </button>
                </div>
                <div className = {styles.primary}>
                    {section === "home" && <Home />}
                    {section === "add" && <Add />}
                    {section === "edit" && <Edit />}
                    {section === "view" && <View />}
                </div>
            </div>
        </>
    )
}