import mongoose from "mongoose";

const DB_URL = "mongodb+srv://sylviaDB:devsylvia@cluster0.fhx2vt1.mongodb.net/AugustineBlog?retryWrites=true&w=majority"

// const db_Url = "mongodb://localhost/AugustineBlog"

export const DBconnect = async() =>{
    try {
        const connectionstring = await mongoose.connect(DB_URL);
        console.log("")
        console.log(`Database is connected to server on ${connectionstring.connection.host}`)
    } catch (error) {
        console.log(`Couldn't connect to ${DB_URL}`)
    }
}