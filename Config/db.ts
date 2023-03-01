import mongoose from "mongoose";

const lifeURI = ""

const db_Url = "mongodb://localhost/AugustineBlog"

export const DBconnect = async() =>{
    try {
        const connectionstring = await mongoose.connect(db_Url);
        console.log(`Database is connected to server on ${connectionstring.connection.host}`)
    } catch (error) {
        console.log(`Couldn't connect to ${db_Url}`)
    }
}