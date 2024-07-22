import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const DBConnection =async() =>{
    const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@file-sharing.dntiozo.mongodb.net/`;
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Database connected successfully")
    } catch (error) {
        console.error('Error while connecting db',error.message);
        
    }
}

export default DBConnection;
