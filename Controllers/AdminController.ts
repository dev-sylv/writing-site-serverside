import AdminModels from "../Models/adminModels";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { Request, Response } from "express";
import { environmentVariables } from "../Config/environmentVariables";

// Admin and Users Register
export const AdminRegister = async(req: Request, res: Response): Promise<Response> =>{
    try {

        const { name, email, password } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt)

        const admin = await AdminModels.create({
            name: environmentVariables.Adminname,
            email: environmentVariables.AdminEmail,
            password: environmentVariables.AdminPassword,
            isAdmin: true
        })

        const users = await AdminModels.create({
            name,
            email,
            password: hash,
            isAdmin: false
        })

        if (admin) {
            return res.status(201).json({
                message: "Successfully created Admin Profile",
                data: admin
            })
        }
        if (users) {
            return res.status(201).json({
                message: "Successfully created User Profile",
                data: users
            })
        }
        return res.status(201).json({
            message: "Registered Successfully",
            data: admin / users
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

        const user = await AdminModels.findById({email})

        const checkPassword = await bcrypt.compare(password, user!.password)

        if (email === adminemail && password === adminpassword) {
            return res.status(200).json({
                message: "Admin Login Successful",
                data: `Welcome ${adminname}`
            })
        } 
        if (user && checkPassword) {
                return res.status(404).json({
                    message: "User Login Successfull",
                    data: `Welcome ${user!.name}`,
                })
            }
        return res.status(200).json({
            message: "Login Sucessfull",
        })
    } catch (error) {
        return res.status(400).json({
            message: "Login failed", error
        })
    }
}
