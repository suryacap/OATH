# OATH Hackathon Project - Backend Documentation

## Overview
The OATH Hackathon Project is a healthcare supply chain platform that integrates smart contracts, cloud storage, and a web UI to facilitate secure and efficient management of medical supplies. This backend service is built using Node.js and Express, providing APIs for different user roles: Manufacturer, Pharmacy, Doctor, and Patient.

## Project Structure
```
server
├── src
│   ├── controllers       # Contains logic for handling requests
│   │   ├── manufacturerController.js
│   │   ├── pharmacyController.js
│   │   ├── doctorController.js
│   │   └── patientController.js
│   ├── routes            # Defines API routes for each user role
│   │   ├── manufacturerRoutes.js
│   │   ├── pharmacyRoutes.js
│   │   ├── doctorRoutes.js
│   │   └── patientRoutes.js
│   ├── services          # Contains services for business logic
│   │   └── akaveService.js
│   └── app.js           # Entry point for the Express application
├── package.json          # Backend dependencies and scripts
└── README.md             # Documentation for the backend service
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the server directory:
   ```
   cd OATH-Hackathon-Project/server
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Server
To start the backend server, run:
```
npm start
```
The server will be available at `http://localhost:3000`.

## API Endpoints
### Manufacturer
- **POST /api/manufacturer/mint**: Mint a new batch hash.
  
### Pharmacy
- **POST /api/pharmacy/verify**: Verify a medicine batch.
- **POST /api/pharmacy/dispense**: Dispense a drug.

### Doctor
- **POST /api/doctor/prescribe**: Issue a prescription.

### Patient
- **GET /api/patient/history**: Retrieve medical history.

## Services
The `akaveService.js` file contains logic to simulate AKAVE Cloud operations, including SHA-256 hash calculations and URL generation.

## Contribution
For contributions, please create a new branch and submit a pull request with a description of your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.