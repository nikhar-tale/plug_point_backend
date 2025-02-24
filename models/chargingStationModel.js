// models/chargingStationModel.js
const dummyData = require('../data/dummyData');

class ChargingStation {
  static getAll() {
    return dummyData;
  }

  static getById(id) {
    return dummyData.find(station => station.id === id);
  }
}

module.exports = ChargingStation;
