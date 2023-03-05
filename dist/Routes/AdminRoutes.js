"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AdminController_1 = require("../Controllers/AdminController");
const adminroutes = (0, express_1.Router)();
adminroutes.route("/registerusers").post(AdminController_1.RegisterUsers);
adminroutes.route("/loginuser").post(AdminController_1.AdminandUserLogin);
adminroutes.route("/getallusers").get(AdminController_1.GetEverybody);
exports.default = adminroutes;
