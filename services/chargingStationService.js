z// services/chargingStationService.js
const ChargingStation = require('../models/chargingStationModel');

exports.fetchAllStations = () => {
  return ChargingStation.getAll();
};

exports.fetchStationById = (id) => {
  return ChargingStation.getById(id);
};
