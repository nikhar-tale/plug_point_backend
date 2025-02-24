# Plug Point (EV Charging Backend)

A Node.js backend application for the EV Charging App that provides endpoints to retrieve and update electric vehicle charging station data. This project follows the Model-View-Controller (MVC) pattern to ensure a scalable and maintainable codebase.

## Features

- **MVC Architecture:** Clear separation of concerns with models, views (controllers), and routes.
- **Dummy Data:** Provides sample charging station data that can be easily replaced with a real database.
- **Polling Simulation:** Updates charging station statuses every 30 seconds to mimic real-time changes.
- **CORS Enabled:** Supports cross-origin requests for integration with a Flutter frontend.
- **Global Error Handling:** Centralized error management for robust API responses.

## Folder Structure

```plaintext
ev-charging-backend/
├── config/
│   └── db.js                     # Database connection configuration (placeholder)
├── controllers/
│   └── chargingStationController.js  # Controller functions for charging station endpoints
├── data/
│   └── dummyData.js              # Dummy data for charging stations
├── middleware/
│   └── errorHandler.js           # Global error handling middleware
├── models/
│   └── chargingStationModel.js   # Data model for charging stations
├── routes/
│   └── chargingStationRoutes.js  # Express routes for charging station endpoints
├── services/
│   └── chargingStationService.js # Business logic for charging station data (optional)
├── .env                          # Environment variables (e.g., PORT, DB connection string)
├── app.js                        # Main application entry point
├── package.json                  # Project metadata and dependencies
└── README.md                     # Project documentation

## Clone the Repository

git clone https://github.com/nikhar-tale/plug_point_backend.git
cd ev-charging-backend


## Running the Application

1. Development Mode
npm run dev


2. Production Mode
npm start


