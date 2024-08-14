import { connect } from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
// const DB_NAME = process.env.DB_NAME;
// const DB_USER = process.env.DB_USER;
// const DB_PASSWORD = process.env.DB_PASSWORD;
// const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.oowm8ce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

 const dbConnect = async() => {
    try {
        connect(MONGODB_URI, { dbName: 'Item' })
        console.log('Connected to MongoDB')
    }
    catch(error){
        console.log(`DB Connection Failed: Error --> ${error}`)
    }
}

export default dbConnect

