const StudentService = require('../../services/api/student.service');

const studentService = new StudentService();

/**
 * Student List
 */
const list = (req, res, next) => studentService.list(req)
    .then(response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Student list successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Student list fail.",
            data: err
        });
    })

/**
 * Student Detail
 */
const detail = (req, res, next) => studentService.detail(req)
    .then(response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Student detail successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Student detail fail.",
            data: err
        });
    })

/**
 * Student store
 */
const store = (req, res, next) => studentService.store(req)
    .then(response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Student store successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Student store fail.",
            data: err
        });
    })

/**
 * Student Update
 */
const update = (req, res, next) => studentService.update(req)
    .then( response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Student updated successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Student updating fail.",
            data: err
        });
    })

/**
 * Student Delete
 */
const deleteStudent = (req, res, next) => studentService.delete(req)
    .then( response => {
        res.status(200).json({
            statusCode: 200,
            success: false,
            message: "Student deleted successful.",
            data: response
        })
    }).catch( err => {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Student deletion fail.",
            data: err
        });
    })

module.exports = {
    list,
    detail,
    store,
    update,
    deleteStudent
}