const express = require('express');
const router = express.Router();

// Simulated database for prescriptions
let prescriptions = {};

// Issue a prescription
router.post('/issue', (req, res) => {
    const { patientENS, medicineENS, dosage, frequency } = req.body;

    if (!patientENS || !medicineENS || !dosage || !frequency) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const prescriptionId = `${patientENS}-${medicineENS}-${Date.now()}`;
    prescriptions[prescriptionId] = { patientENS, medicineENS, dosage, frequency };

    // Simulate storing the prescription hash on-chain
    const prescriptionHash = `hash-${prescriptionId}`;
    
    res.status(201).json({ message: 'Prescription issued successfully', prescriptionHash });
});

// Get prescriptions for a patient
router.get('/history/:patientENS', (req, res) => {
    const { patientENS } = req.params;
    const patientPrescriptions = Object.entries(prescriptions)
        .filter(([_, prescription]) => prescription.patientENS === patientENS)
        .map(([id, prescription]) => ({ id, ...prescription }));

    res.status(200).json(patientPrescriptions);
});

module.exports = router;