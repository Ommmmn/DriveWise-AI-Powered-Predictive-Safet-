const Trip = require('../models/Trip');

// Add a new trip
exports.addTrip = async (req, res) => {
  const { startTime, endTime, distance, safetyScore, events } = req.body;

  try {
    const newTrip = new Trip({
      userId: req.user.id,
      startTime,
      endTime,
      distance,
      safetyScore,
      events,
    });

    await newTrip.save();
    res.json(newTrip);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get all trips for a user
exports.getTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ userId: req.user.id }).sort({ startTime: -1 });
    res.json(trips);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};