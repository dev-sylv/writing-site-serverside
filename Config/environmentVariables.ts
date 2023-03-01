import dotenv from "dotenv"

dotenv.config();

export const environmentVariables = {
    port: process.env.port as string,
    Adminname: process.env.name as string,
    AdminEmail: process.env.email as string,
    AdminPassword: process.env.password as string,
}