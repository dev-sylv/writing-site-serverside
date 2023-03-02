import { Router } from "express";
import { AdminLogin, AdminRegister, GetEverybody } from "../Controllers/AdminController";

const adminroutes = Router();

adminroutes.route("/admin-registers").post(AdminRegister);
adminroutes.route("/admin-login").post(AdminLogin);
adminroutes.route("/getallusers").get(GetEverybody);

export default adminroutes