import { Router } from "express";
import { AdminLogin, AdminRegister } from "../Controllers/AdminController";

const adminroutes = Router();

adminroutes.route("/admin-registers").post(AdminRegister);
adminroutes.route("/admin-login").post(AdminLogin);

export default adminroutes