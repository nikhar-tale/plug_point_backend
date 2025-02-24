// controllers/chargingStationController.js
const ChargingStation = require('../models/chargingStationModel');

// Get all charging stations
exports.getChargingStations = (req, res, next) => {
  try {
    const stations = ChargingStation.getAll();
    res.json(stations);
  } catch (error) {
    next(error);
  }
};

// Get a specific charging station by ID
exports.getChargingStationById = (req, res, next) => {
  try {
    const station = ChargingStation.getById(req.params.id);
    if (!station) {
      return res.status(404).json({ error: 'Station not found' });
    }
    res.json(station);
  } catch (error) {
    next(error);
  }
};
