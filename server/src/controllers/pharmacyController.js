const express = require('express');
const router = express.Router();
const akaveService = require('../services/akaveService');

// Verify Medicine
router.post('/verify', (req, res) => {
    const { batchNo } = req.body;
    // Simulate verification logic
    const isAuthentic = Math.random() > 0.5; // Randomly determine if authentic
    res.json({
        status: isAuthentic ? 'Authentic' : 'Compromised'
    });
});

// Dispense Drug
router.post('/dispense', (req, res) => {
    const { batchNo, patientENS, doctorENS } = req.body;
    // Simulate dispensing logic
    const isDispensed = Math.random() > 0.5; // Randomly determine if dispensing is successful
    res.json({
        status: isDispensed ? 'Dispensed Successfully' : 'Dispensing Failed',
        batchNo,
        patientENS,
        doctorENS
    });
});

module.exports = router;