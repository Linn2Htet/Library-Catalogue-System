const express = require('express');

const router = express.Router();

/**
 * Middlewares
 */
const jwtMiddleware = require('../middlewares/jwt.middleware');

//Controllers
const authController = require('../controllers/api/authController');
const categoryController = require('../controllers/api/categoryController');
const authorController = require('../controllers/api/authorController');
const bookController = require('../controllers/api/bookController');
const studentController = require('../controllers/api/studentController');
const borrowController = require('../controllers/api/borrowController');


/**
 * Validators
 */
const validator = require('../validations/index.validator');
const categoryValidator = require('../validations/category.validator');
const authorValidator = require('../validations/author.validator');

/**
 * Auth routes
 */
router.post('/login', authController.login);

/**
 * Category routes
 */
router.get('/categories', jwtMiddleware.checkToken, categoryController.list);
router.get('/categories/detail/:id', jwtMiddleware.checkToken, categoryController.detail);
router.post('/categories/create', jwtMiddleware.checkToken, categoryValidator.storeRules(), validator.validate, categoryController.store);
router.put('/categories/update/:id', jwtMiddleware.checkToken, categoryValidator.storeRules(), validator.validate, categoryController.update);
router.delete('/categories/delete/:id', jwtMiddleware.checkToken, categoryController.deleteCategory);

/**
 * Author routes
 */
router.get('/authors', jwtMiddleware.checkToken, authorController.list);
router.get('/authors/detail/:id', jwtMiddleware.checkToken, authorController.detail);
router.post('/authors/create', jwtMiddleware.checkToken, authorValidator.storeRules(), validator.validate, authorController.store);
router.put('/authors/update/:id', jwtMiddleware.checkToken, authorValidator.updateRules(), validator.validate, authorController.update);
router.delete('/authors/delete/:id', jwtMiddleware.checkToken, authorController.deleteAuthor);

/**
 * Book routes
 */
router.get('/books', jwtMiddleware.checkToken, bookController.list);
router.get('/books/detail/:id', jwtMiddleware.checkToken, bookController.detail);
router.post('/books/create', jwtMiddleware.checkToken, bookController.store);
router.put('/books/update/:id', jwtMiddleware.checkToken, bookController.update);
router.delete('/books/delete/:id', jwtMiddleware.checkToken, bookController.deleteBook);

/**
 * Student routes
 */
router.get('/students', jwtMiddleware.checkToken, studentController.list);
router.get('/students/detail/:id', jwtMiddleware.checkToken, studentController.detail);
router.post('/students/create', jwtMiddleware.checkToken, studentController.store);
router.put('/students/update/:id', jwtMiddleware.checkToken, studentController.update);
router.delete('/students/delete/:id', jwtMiddleware.checkToken, studentController.deleteStudent);

/**
 * Student routes
 */
router.get('/borrows', jwtMiddleware.checkToken, borrowController.list);
router.get('/borrows/detail/:id', jwtMiddleware.checkToken, borrowController.detail);
router.post('/borrows/create', jwtMiddleware.checkToken, borrowController.store);
router.put('/borrows/return', jwtMiddleware.checkToken, borrowController.borrowReturn);

module.exports = router;