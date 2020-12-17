import dotenv from 'dotenv';

dotenv.config();

export const Config = {
    databaseUrl: process.env.DATABASE_URL ?? 'mongodb://localhost:27017/recipe',
    port: process.env.PORT ?? '3000',
    logLevel: process.env.LOG_LEVEL ?? 'info',
    env: process.env.NODE_ENV ?? 'development',
};
