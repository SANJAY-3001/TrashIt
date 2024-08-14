const express = require('express');
const router = express.Router();
const submitWasteController = require('../controllers/submitWasteController');

// POST request to create a new submit waste record
router.post('/submit-waste', submitWasteController.createSubmitWaste);

// GET request to fetch all waste submissions
router.get('/submit-waste', submitWasteController.getAllWasteSubmissions);

// GET request to fetch waste submissions by user ID
router.get('/submit-waste/user/:userId', submitWasteController.getSubmitWasteByUserId);

router.put('/submit-waste/:id', submitWasteController.updateSubmitStatusById);

module.exports = router;
