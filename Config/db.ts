import mongoose from "mongoose";

const LifeURI = "mongodb+srv://sylviaDB:atlaspassword@cluster0.fhx2vt1.mongodb.net/AugustineBlog?retryWrites=true&w=majority"

const db_Url = "mongodb://localhost/AugustineBlog"

export const DBconnect = async() =>{
    try {
        const connectionstring = await mongoose.connect(db_Url);
        console.log("")
        console.log(`Database is connected to server on ${connectionstring.connection.host}`)
    } catch (error) {
        console.log(`Couldn't connect to ${LifeURI}`)
    }
}