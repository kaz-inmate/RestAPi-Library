const express = require('express');
const router = express.Router();
const Book = require('./../models/bookModel');
const bookController =  require('./../controllers/bookController');




router
    .get('/',bookController.getAllBooks)
    .post('/',bookController.addBooks);


router
    .get('/:id',bookController.getOneBook)
    .patch('/:id',bookController.updateBook)
    .delete('/:id',bookController.deleteBook);


module.exports = router;