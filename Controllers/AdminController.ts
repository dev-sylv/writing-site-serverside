import AdminModels from "../Models/adminModels";

import { Request, Response } from "express";

// Admin Register
export const AdminRegister = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const admin = await AdminModels.create({
            name: "Adimike Augustine",
            email: "adimikeaugustine@gmail.com",
            password: "augustinewrites2001"
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

