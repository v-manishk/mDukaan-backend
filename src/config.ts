import "dotenv/config";

export const PORT = process.env.PORT || 3000;

export const DB_CONFIG = {
    HOST: process.env.DB_HOST || "localhost",
    USER_NAME: process.env.DB_USER || "user",
    PASSWORD: process.env.DB_PASSWORD || "password",
    DB_NAME: process.env.DB_NAME || "database",
    PORT: parseInt(process.env.DB_PORT || "5432", 10),
};

