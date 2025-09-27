const express = require('express');
const router = express.Router();
const manufacturerController = require('../controllers/manufacturerController');

// Route to mint a new batch hash
router.post('/mint', manufacturerController.mintBatchHash);

module.exports = router;