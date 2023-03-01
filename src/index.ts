import express, { Application, Request, Response} from "express";

import {environmentVariables} from "../Config/environmentVariables"

import cors from "cors";
import { DBconnect } from "../Config/db";
import adminroutes from "../Routes/AdminRoutes";
import blogRoutes from "../Routes/BlogRoutes";

const port = environmentVariables.port

// Instantiating my server called app from express
const app: Application = express();

// Connecting my database to server:
DBconnect()

// setting up needed middlewares for my application
app.use(express.json());
app.use(cors());

// Setting up my default url for app:
app.get("/", (req: Request, res: Response) =>{
    return res.status(200).json({
        message: "Server is up and running for the writing site"
    })
});

// Application Routes(Admin, Blogs):
app.use("/api/admin", adminroutes)
app.use("/api/blog", blogRoutes)

// Listening to my port
app.listen(port, () =>{
    console.log("")
    console.log("Listening to server on port", port)
})