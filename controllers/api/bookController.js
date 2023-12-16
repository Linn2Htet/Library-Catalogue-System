const BookService = require('../../services/api/book.service');

const bookService = new BookService();

/**
 * Book List
 */
const list = (req, res, next) => bookService.list(req)
    .then(response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Book list successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Book list fail.",
            data: err
        });
    })

/**
 * Book Detail
 */
const detail = (req, res, next) => bookService.detail(req)
    .then(response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Book detail successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Book detail fail.",
            data: err
        });
    })

/**
 * Book store
 */
const store = (req, res, next) => bookService.store(req)
    .then(response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Book store successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Book store fail.",
            data: err
        });
    })

/**
 * Book Update
 */
const update = (req, res, next) => bookService.update(req)
    .then( response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Book updated successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Book updating fail.",
            data: err
        });
    })

/**
 * Book Delete
 */
const deleteBook = (req, res, next) => bookService.delete(req)
    .then( response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Book deleted successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Book deletion fail.",
            data: err
        });
    })

module.exports = {
    list,
    detail,
    store,
    deleteBook,
    update
}