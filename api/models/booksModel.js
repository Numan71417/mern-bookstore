import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:{
        type: String,
        required :true,
    },
    author:{
        type:String,
        required:true,
    },
    publishYear:{
        type : Number,
        required: true,
    },
}, {timestamps:true});

const bookModel = mongoose.model('book', schema);

export default bookModel