const AuthorService = require('../../services/api/author.service');

const authorService = new AuthorService();

/**
 * Author List
 */
const list = (req, res, next) => authorService.list(req)
    .then(response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Author list successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Author list fail.",
            data: err
        });
    })

/**
 * Author Detail
 */
const detail = (req, res, next) => authorService.detail(req)
    .then(response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Author detail successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Author detail fail.",
            data: err
        });
    })

/**
 * Author store
 */
const store = (req, res, next) => authorService.store(req)
    .then(response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Author store successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Author store fail.",
            data: err
        });
    })

/**
 * Author Update
 */
const update = (req, res, next) => authorService.update(req)
    .then( response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Author updated successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Author updating fail.",
            data: err
        });
    })

/**
 * Author Delete
 */
const deleteAuthor = (req, res, next) => authorService.delete(req)
    .then( response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Author deleted successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Author deletion fail.",
            data: err
        });
    })

module.exports = {
    list,
    detail,
    store,
    deleteAuthor,
    update
}