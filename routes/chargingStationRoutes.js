// routes/chargingStationRoutes.js
const express = require('express');
const router = express.Router();
const stationController = require('../controllers/chargingStationController');

// GET /chargingStations - List all stations
router.get('/', stationController.getChargingStations);

// GET /chargingStations/:id - Get details for a specific station
router.get('/:id', stationController.getChargingStationById);

module.exports = router;
