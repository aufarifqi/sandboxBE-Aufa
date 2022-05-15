const express = require('express');
const router = express.Router();
const createClass = require('./create.classController');
const createUser = require('./create.userController');
const createBook = require('./create.booksController');


router.post('/', createClass.service);


module.exports = router;