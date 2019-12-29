const Book = require('./../models/bookModel');


exports.getAllBooks = async (req, res) => {
    try {
        const queryObj = { ...req.query}
        const excludeFiedls = ['page','sort', 'limit', 'fields'];
        excludeFiedls.forEach(el => delete queryObj[el]);

        const query = Book.find(queryObj);

        const books = await query;
        res.status(200).json({
            status: 'success',
            results: books.length,
            data: {
                books
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        });
    }
   
};

exports.addBooks = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
             book: newBook
            }
        });
        
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        });
    }
};


exports.getOneBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                book
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                book
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        });
    }
};


exports.deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        });
    }
};

