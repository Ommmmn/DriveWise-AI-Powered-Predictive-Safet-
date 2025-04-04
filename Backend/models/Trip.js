const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  safetyScore: {
    type: Number,
    required: true,
  },
  events: [
    {
      type: String, // e.g., "Harsh Braking", "Speeding"
    },
  ],
});

module.exports = mongoose.model('Trip', TripSchema);