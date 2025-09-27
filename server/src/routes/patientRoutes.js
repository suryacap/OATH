const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Route to get medical history for a patient
router.get('/:patientENS/history', patientController.getMedicalHistory);

module.exports = router;