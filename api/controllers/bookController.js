const mongoose = require('mongoose')
const book = require('../models/booksModel')

//get all books data
const getBooks = async (req, res)=>{
    const bookdata = await book.find({}).sort({createdAt:-1})
    res.status(200).json(bookdata)
}

//get a single book /:id
const getBook= async (req, res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"not found "})
    }

    const bookdata = await book.findById(id)
    if(!bookdata){
        return res.status(404).json({error})
    }
    res.status(200).json(bookdata);
}

//post a book || create a book
const createBook= async (req, res)=>{
    
    const {title,author,publishYear} = req.body;
    //adding document to db
    try {
       const bookdata = await book.create({title,author,publishYear});
       res.status(200).json(bookdata)

    }catch (error) {
        res.status(400).json({error})
    }
}

// delete all book
const deleteAllBooks = async (req, res)=>{
    
    const bookdata = await book.deleteMany({});
    
    res.status(200).json("deleted")
}

// delete a book /:id
const deleteBook = async (req, res)=>{
    const {id} = req.params;

    const bookdata = await book.findByIdAndDelete(id);
    if(!bookdata){
        return res.status(404).json({"error":"invalid id , could not found"})
    }
    res.status(200).json({msg:"deleted"})
}

// update a book /:id
const updateBook = async (req, res)=>{
    const {id} = req.params;

    const bookdata = await book.findOneAndUpdate({_id:id}, {...req.body})
    if(!bookdata){
        return res.status(404).json({"error":"invalid id , could not found"})
    }
    res.status(200).json(bookdata)
}

module.exports = {
    createBook,
    getBooks,
    getBook,
    deleteBook,
    deleteAllBooks,
    updateBook,

}
