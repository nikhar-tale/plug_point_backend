// app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stationRoutes = require('./routes/chargingStationRoutes');
const errorHandler = require('./middleware/errorHandler');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/chargingStations', stationRoutes);

// Global Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
