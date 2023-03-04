import AdminModels from "../Models/adminModels";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { Request, Response } from "express";

// Admin and Users Register
export const RegisterUsers = async(req: Request, res: Response): Promise<Response> =>{
    try {

        const { name, email, password } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const users = await AdminModels.create({
            name,
            email,
            password: hashedPassword,
            isAdmin: false
        })
        return res.status(201).json({
                message: "Successfully created User",
                data: users
            })
    } catch (error) {
        return res.status(400).json({
            message: "Couldn't sign up user", error
        })
    }
}

// Admin Login
export const AdminandUserLogin = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const { email, password } = req.body;
        // const adminname = environmentVariables.Adminname
        // const adminemail = environmentVariables.AdminEmail
        // const adminpassword = environmentVariables.AdminPassword

        const user = await AdminModels.findOne({email})

        const checkPassword = await bcrypt.compare(password, user!.password)

        if (user && checkPassword) {
            return res.status(200).json({
                message: "Login successfull",
                data: `Welcome ${user?.name}`
            })
        } else {
            return res.status(400).json({
                message: "Login failed",
                data: "Either email or password is not correct"
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: "Login failed", error
        })
    }
}

// Get all users and admins:
export const GetEverybody = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const everybody = await AdminModels.find();
        return res.status(200).json({
            message: "Got all users and admin",
            data: everybody
        })
    } catch (error) {
        return res.status(400).json({
            message: "Couldn't get all", error
        })
    }
}