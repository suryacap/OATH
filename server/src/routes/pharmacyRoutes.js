const express = require('express');
const router = express.Router();
const pharmacyController = require('../controllers/pharmacyController');

// Route to verify medicine
router.post('/verify', pharmacyController.verifyMedicine);

// Route to dispense drug
router.post('/dispense', pharmacyController.dispenseDrug);

module.exports = router;