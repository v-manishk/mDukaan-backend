import pg from "pg";
import { DB_CONFIG } from "../config";
const { Pool } = pg;

let pool: pg.Pool | null = null;

export async function dbConnection(): Promise<pg.Pool> {
  try {

    if (pool) {
      return pool; // reuse existing pool
    }

    pool = new Pool({
      host: DB_CONFIG.HOST,
      user: DB_CONFIG.USER_NAME,
      password: DB_CONFIG.PASSWORD,
      database: DB_CONFIG.DB_NAME,
      port: DB_CONFIG.PORT,
      ssl: false, // set true for production if needed
      max: 10, // max connections
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });

    console.log("🔄 Connecting to the database...");
    await pool.query("SELECT 1");

    console.log("✅ PostgreSQL connected successfully");

    pool.on('error', (err) => {
      console.error('❌ PostgreSQL connection error', err);
      process.exit(1);
    });

    return pool;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}
