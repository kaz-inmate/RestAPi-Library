 const mongoose = require('mongoose');
 
 const bookSchema = new mongoose.Schema({
    
    bookId: {
        type: String,
        required: [true, 'Book must have an id'],
        unique: true
    },
    author: {
        type: String,
        required: [true, 'Book must have an author']
     },
     pages: {
         type: Number,
     },
     title: {
         type: String,
         required: [true,'Book must have a title' ]
     },
     semester: {
         type: String,
         required: [true, 'A semester must be specified']
     },
    quantity: {
        type: Number,
        required: [true, 'Total quantity of books must be specified']
    }
 });

 const Book = mongoose.model('Book', bookSchema);

 module.exports = Book;