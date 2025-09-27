# OATH Hackathon Project

## Overview
OATH is a healthcare supply chain platform designed to streamline the interaction between Manufacturers, Pharmacies, Doctors, and Patients through a secure and efficient system. The platform utilizes blockchain technology to ensure authenticity and traceability of medical supplies.

## Project Structure
The project is organized into three main components:

- **Client**: The frontend application built with React and Tailwind CSS.
- **Server**: The backend API built with Node.js and Express.
- **Contracts**: The smart contracts written in Solidity for managing supply chain logic.

## Technology Stack
- **Frontend**: React (Vite), Tailwind CSS, Ethers.js
- **Backend**: Node.js, Express
- **Smart Contracts**: Solidity, Hardhat

## Features
- Role-based access for four distinct user types:
  - **Manufacturer**: Mint new batch hashes and upload receipts.
  - **Pharmacy**: Verify medicine authenticity and dispense drugs.
  - **Doctor**: Issue prescriptions linked to patients.
  - **Patient**: View medical history and track prescriptions.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Hardhat (for smart contract development)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/OATH-Hackathon-Project.git
   cd OATH-Hackathon-Project
   ```

2. Install dependencies for the client:
   ```
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```
   cd ../server
   npm install
   ```

4. Install dependencies for the contracts:
   ```
   cd ../contracts
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd server
   npm start
   ```

2. Start the frontend application:
   ```
   cd ../client
   npm run dev
   ```

3. Deploy the smart contracts:
   ```
   cd ../contracts
   npx hardhat run scripts/deploy.js --network yourNetwork
   ```

## Usage
- Access the frontend application at `http://localhost:3000`.
- Connect your wallet to interact with the application.
- Select your role to access the corresponding portal.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.