const express = require('express');
const {
    createBook,
    getBooks,
    getBook,
    deleteBook,
    deleteAllBooks,
    updateBook,
} = require('../controllers/bookController')


const router = express.Router();

//GET method to get all books
router.get('/', getBooks)

//GET method to get one book
router.get('/:id', getBook)

//Post method to post  books
router.post('/', createBook)


//Delete all workouts
// router.delete('/',  deleteAllBooks)

//Delete method for one book
router.delete('/:id',  deleteBook)

//Patch method to update a book
router.patch('/:id', updateBook)


module.exports= router