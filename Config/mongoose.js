import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
let client ;
const URL = process.env.URL ;

export const connectUsingMongoose = async () => await mongoose.connect(URL).then(clientInstance =>{
    client = clientInstance ;
}).catch(err =>{
 console.log("failed to connect")
    console.log(err)
})


export const getDB = async (client) => {
    return client.db();
}

