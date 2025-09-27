const express = require('express');
const router = express.Router();

// Simulated patient medical history data
const patientHistory = {
    '0x123': [
        { type: 'Prescription', details: 'Medicine A - Dosage: 10mg - Frequency: Once a day', date: '2023-01-01', doctor: '0xDoctor1' },
        { type: 'Dispensed', details: 'Medicine A - Batch ID: 001', date: '2023-01-02', pharmacy: '0xPharmacy1' }
    ],
    '0x456': [
        { type: 'Prescription', details: 'Medicine B - Dosage: 5mg - Frequency: Twice a day', date: '2023-02-01', doctor: '0xDoctor2' },
        { type: 'Dispensed', details: 'Medicine B - Batch ID: 002', date: '2023-02-02', pharmacy: '0xPharmacy2' }
    ]
};

// Controller function to get medical history for a patient
const getMedicalHistory = (req, res) => {
    const patientENS = req.params.ens;
    const history = patientHistory[patientENS] || [];
    res.json(history);
};

// Define routes
router.get('/:ens/history', getMedicalHistory);

module.exports = router;