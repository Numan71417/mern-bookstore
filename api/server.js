const express = require("express");
const dotenv = require("dotenv");
const router = require('./routes/bookrouter')
const morgan = require("morgan");
const { default: mongoose } = require("mongoose");
// const router = require('./routes/bookrouter')

dotenv.config();
const app = express();
const PORT = process.env.PORT | 8000



const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);

        console.log(`server running on: ${mongoose.connection.host}`);
    } catch (e) {
        console.log(" error: ", e );
    }
}
connectDb();

app.use(express.json());
app.use(morgan('dev'));

// routes 
app.use('/api/v1/books' , router)



app.listen(PORT , ()=>{
    console.log(`App is working on PORT ${PORT}`)
})