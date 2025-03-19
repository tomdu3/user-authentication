const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken } = require('../utils/jwtUtils');


// Get user information
router.get('/me', verifyToken, userController.getUserInfo);

module.exports = router;
