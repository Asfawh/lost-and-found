import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import itemRoute from './routes/item.routes.js'


//pulling env vars
dotenv.config();

//making instance of our express service
const app = express();

//attach middleware to our express service
app.use(express.json(), cors());
app.use('/api', itemRoute)


async function serverStart(){
    try {
        dbConnect();
        const PORT = process.env.PORT;
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    } catch(err){
        console.log(err)
    }
}

serverStart();


