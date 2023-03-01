import express, { Application, Request, Response} from "express";

import {environmentVariables} from "../Config/environmentVariables"

import cors from "cors";

const port = environmentVariables.port

// Instantiating my server called app from express
const app: Application = express();

// setting up needed middlewares for my application
app.use(express.json());
app.use(cors());

// Setting up my default url for app:
app.get("/", (req: Request, res: Response) =>{
    console.log("Server is up and running for the writing site")
})

// Listening to my port
app.listen(port, () =>{
    console.log("")
    console.log("Listening to server on port", port)
})