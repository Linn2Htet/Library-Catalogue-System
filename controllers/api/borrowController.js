const BorrowService = require('../../services/api/borrow.service');

const borrowService = new BorrowService();

/**
 * Borrow List
 */
const list = (req, res, next) => borrowService.list(req)
    .then(response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Borrow list successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Borrow list fail.",
            data: err
        });
    })

/**
 * Borrow detail
 */
const detail = (req, res, next) => borrowService.detail(req)
    .then(response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Borrow detail successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Borrow detail fail.",
            data: err
        });
    })

/**
 * Borrow store
 */
const store = (req, res, next) => borrowService.store(req)
    .then(response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Borrow store successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Borrow store fail.",
            data: err
        });
    })

/**
 * Borrow return
 */
const borrowReturn = (req, res, next) => borrowService.borrowReturn(req)
    .then(response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Borrow return successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Borrow return fail.",
            data: err
        });
    })

module.exports = {
    list,
    detail,
    store,
    borrowReturn
}