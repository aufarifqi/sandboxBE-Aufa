const express = require('express');
const router = express.Router();
const classRoutes = require('../controller/classes/router');

router.use('/class', classRoutes);


module.exports = router;