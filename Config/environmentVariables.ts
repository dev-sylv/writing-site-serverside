import dotenv from "dotenv"

dotenv.config();

export const environmentVariables = {
    port: process.env.port as string
}