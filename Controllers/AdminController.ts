import AdminModels from "../Models/adminModels";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
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
        const { email, password } = req.body;
        const adminname = environmentVariables.Adminname
        const adminemail = environmentVariables.AdminEmail
        const adminpassword = environmentVariables.AdminPassword

        if (email === adminemail && password === adminpassword) {
            return res.status(200).json({
                message: "Admin Login Successful",
                data: `Welcome ${adminname}`
            })
        } else {
            return res.status(404).json({
                message: "You're not an authorized Admin",
                data: "BACK OFF!!!",
                // token: jwt.sign({ _id: adminname}, "dhfufrr-fhfrgshcuiei-vriisiwowuhcb")
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: "Login failed", error
        })
    }
}
