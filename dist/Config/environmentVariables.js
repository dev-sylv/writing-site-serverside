"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environmentVariables = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.environmentVariables = {
    port: process.env.port,
    Adminname: process.env.name,
    AdminEmail: process.env.email,
    AdminPassword: process.env.password,
};
