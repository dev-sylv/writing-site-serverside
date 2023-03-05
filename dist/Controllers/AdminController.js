"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEverybody = exports.AdminandUserLogin = exports.RegisterUsers = void 0;
const adminModels_1 = __importDefault(require("../Models/adminModels"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// Admin and Users Register
const RegisterUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        const users = yield adminModels_1.default.create({
            name,
            email,
            password: hashedPassword,
            isAdmin: false
        });
        return res.status(201).json({
            message: "Successfully created User",
            data: users
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Couldn't sign up user", error
        });
    }
});
exports.RegisterUsers = RegisterUsers;
// Admin Login
const AdminandUserLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Please fill in all fields",
            });
        }
        const user = yield adminModels_1.default.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User does not exist",
            });
        }
        const checkPassword = yield bcrypt_1.default.compare(password, user.password);
        if (!checkPassword) {
            return res.status(400).json({
                message: "Either email or password is not correct",
            });
        }
        return res.status(200).json({
            message: "Login successful",
            data: `Welcome ${user === null || user === void 0 ? void 0 : user.name}`
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Login failed", error
        });
    }
});
exports.AdminandUserLogin = AdminandUserLogin;
// Get all users and admins:
const GetEverybody = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const everybody = yield adminModels_1.default.find();
        return res.status(200).json({
            message: "Got all users and admin",
            data: everybody
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Couldn't get all", error
        });
    }
});
exports.GetEverybody = GetEverybody;
