const express = require('express');
const router = express.Router();
const Book = require('./../models/bookModel');
const bookController =  require('./../controllers/bookController');




router
    .route('/')
    .get(bookController.getAllBooks)
    .post(bookController.addBooks);


router
    .route('/:id')
    .get(bookController.getOneBook)
    .patch(bookController.updateBook)
    .delete(bookController.deleteBook);


module.exports = router;