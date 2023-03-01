import AdminModels from "../Models/adminModels";

import { Request, Response } from "express";
import { environmentVariables } from "../Config/environmentVariables";

// Admin Register
export const AdminRegister = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const admin = await AdminModels.create({
            name: environmentVariables.Adminname,
            email: environmentVariables.AdminEmail,
            password: environmentVariables.AdminPassword
        })
        return res.status(201).json({
            message: "Successfully created Admin Profile",
            data: admin
        })
    } catch (error) {
        return res.status(400).json({
            message: "Couldn't sign up Admin", error
        })
    }
}

// Admin Login
export const AdminLogin = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const 
    } catch (error) {
        return res.status(400).json({
            message: "Login failed", error
        })
    }
}
