import express from 'express';
import dotenv from 'dotenv';
import { mongoose } from 'mongoose';

dotenv.config();
const PORT = process.env.PORT | 8000
const app = express();


app.get('/', (req, res)=>{
    return res.status(234).send("Welcome")
})

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);

        console.log(`server running on: ${mongoose.connection.host}`);
    } catch (e) {
        console.log(" error: ", e );
    }
}
connectDb();

app.listen(PORT , ()=>{
    console.log(`App is working on PORT ${PORT}`)
})