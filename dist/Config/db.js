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
exports.DBconnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DB_URL = "mongodb+srv://sylviaDB:devsylvia@cluster0.fhx2vt1.mongodb.net/AugustineBlog?retryWrites=true&w=majority";
// const db_Url = "mongodb://localhost/AugustineBlog"
const DBconnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connectionstring = yield mongoose_1.default.connect(DB_URL);
        console.log("");
        console.log(`Database is connected to server on ${connectionstring.connection.host}`);
    }
    catch (error) {
        console.log(`Couldn't connect to ${DB_URL}`);
    }
});
exports.DBconnect = DBconnect;
