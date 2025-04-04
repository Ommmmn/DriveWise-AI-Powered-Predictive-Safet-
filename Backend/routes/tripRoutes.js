const express = require('express');
const { addTrip, getTrips } = require('../controllers/tripController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Add a new trip
router.post('/', authMiddleware, addTrip);

// Get all trips for a user
router.get('/', authMiddleware, getTrips);

module.exports = router;