const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Route to issue a prescription
router.post('/issue', doctorController.issuePrescription);

// Route to retrieve prescriptions for a patient
router.get('/prescriptions/:patientENS', doctorController.getPrescriptions);

module.exports = router;