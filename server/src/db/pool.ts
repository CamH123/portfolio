import { Pool } from "pg";
import dotenv from 'dotenv';
import {execSync} from 'child_process';

dotenv.config();

// Get windows host ip dynamically in wsl
function getWindowsHostIP(): string {
  if (process.platform === 'linux') {
    // We're in WSL - get Windows host IP
    try {
      const ip = execSync("ip route show | grep -i default | awk '{ print $3}'")
        .toString()
        .trim();
      return ip;
    } catch (error) {
      console.error('Failed to get Windows host IP, falling back to localhost');
      return 'localhost';
    }
  }
  // Not in WSL - use localhost
  return 'localhost';
}

// set db host
const dbHost = process.env.DB_HOST || getWindowsHostIP();

// create connection pool
export const pool = new Pool({
    host: dbHost,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

// checks connection
pool.connect()
  .then(client => {
    console.log('✅ Database connected successfully!');
    client.release();
  })
  .catch(err => {
    console.error('❌ Database connection failed:', err.message);
  });