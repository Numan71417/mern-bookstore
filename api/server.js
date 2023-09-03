import express from 'express';

const PORT = process.env.PORT | 8000
const app = express();


app.get('/', (req, res)=>{
    console.log(req);
    return res.status(234).send("Welcome")
})


app.listen(PORT , ()=>{
    console.log(`App is working on PORT ${PORT}`)
})