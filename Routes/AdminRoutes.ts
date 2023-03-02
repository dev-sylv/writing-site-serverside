import { Router } from "express";
import { AdminandUserLogin, AdminRegister, GetEverybody } from "../Controllers/AdminController";

const adminroutes = Router();

adminroutes.route("/admin-registers").post(AdminRegister);
adminroutes.route("/admin-login").post(AdminandUserLogin);
adminroutes.route("/getallusers").get(GetEverybody);

export default adminroutes