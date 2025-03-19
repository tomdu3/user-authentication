const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken } = require('../middleware/jwtMiddleware');


// Get user information
router.get('/info', verifyToken, userController.getUserInfo);

module.exports = router;
