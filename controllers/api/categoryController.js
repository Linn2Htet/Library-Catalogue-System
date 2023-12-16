const { response } = require('../../app');
const CategoryService = require('../../services/api/category.service');

const categoryService = new CategoryService();

/**
 * Category List
 */
const list = (req, res, next) => categoryService.list(req)
    .then(response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Category list successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Category list fail.",
            data: err
        });
    })

/**
 * Category Detail
 */
const detail = (req, res, next) => categoryService.detail(req)
    .then(response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Category detail successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Category detail fail.",
            data: err
        });
    })

/**
 * Category Store
 */
const store = (req, res, next) => categoryService.store(req)
    .then( response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Category stored successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Category stored fail.",
            data: err
        });
    })

/**
 * Category Update
 */
const update = (req, res, next) => categoryService.update(req)
    .then( response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Category updated successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Category updating fail.",
            data: err
        });
    })

/**
 * Category Delete
 */
const deleteCategory = (req, res, next) => categoryService.delete(req)
    .then( response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Category deleted successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Category deletion fail.",
            data: err
        });
    })

module.exports = {
    list,
    detail,
    store,
    update,
    deleteCategory
}