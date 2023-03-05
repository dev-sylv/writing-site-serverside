"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environmentVariables_1 = require("../Config/environmentVariables");
const cors_1 = __importDefault(require("cors"));
const db_1 = require("../Config/db");
const AdminRoutes_1 = __importDefault(require("../Routes/AdminRoutes"));
const BlogRoutes_1 = __importDefault(require("../Routes/BlogRoutes"));
const port = environmentVariables_1.environmentVariables.port;
// Instantiating my server called app from express
const app = (0, express_1.default)();
// Connecting my database to server:
(0, db_1.DBconnect)();
// setting up needed middlewares for my application
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Setting up my default url for app:
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Server is up and running for the writing site"
    });
});
// Application Routes(Admin, Blogs):
app.use("/api/users", AdminRoutes_1.default);
app.use("/api/blog", BlogRoutes_1.default);
// Listening to my port
app.listen(port, () => {
    console.log("");
    console.log("Listening to server on port", port);
});
