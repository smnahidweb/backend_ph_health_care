import dotenv from 'dotenv';

dotenv.config();

interface ENVConfig{
PORT:string;
NODE_ENV:string;
DATABASE_URL: string;       
BETTER_AUTH_SECRET:string;
BETTER_AUTH_URL:string
}

const loadEnvVariables = (): ENVConfig =>{

    const requiredEnvVars = ['NODE_ENV', 'PORT', 'DATABASE_URL', 'BETTER_AUTH_SECRET', 'BETTER_AUTH_URL'];

    requiredEnvVars.forEach((varName) => {
        if (!process.env[varName]) {
            throw new Error(`Environment variable ${varName} is required but not defined.`);
        }   }); 

    return {
        NODE_ENV : process.env.NODE_ENV,
        PORT : process.env.PORT,
        DATABASE_URL : process.env.DATABASE_URL,
        BETTER_AUTH_SECRET : process.env.BETTER_AUTH_SECRET,
        BETTER_AUTH_URL : process.env.BETTER_AUTH_URL
    } as ENVConfig
}   

export const envConfig = loadEnvVariables();



