import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    mongoose.set("strictQuery", false);
    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-ulb13h8-shard-00-00.yt2jjtk.mongodb.net:27017,ac-ulb13h8-shard-00-01.yt2jjtk.mongodb.net:27017,ac-ulb13h8-shard-00-02.yt2jjtk.mongodb.net:27017/?ssl=true&replicaSet=atlas-13ks62-shard-0&authSource=admin&retryWrites=true&w=majority`;
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    })
    mongoose.connection.on('disconnect', () => {
        console.log('Database Disconnected');
    })
    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;