const express = require('express');
const { getProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Get user profile
router.get('/', authMiddleware, getProfile);

module.exports = router;