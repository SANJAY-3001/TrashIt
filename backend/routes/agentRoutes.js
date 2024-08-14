const express = require('express');
const router = express.Router();
const agentController = require('../controllers/agentController'); // Adjust the path to your controller

// POST route to handle job application submissions
router.post('/apply-job', agentController.applyJob);
router.get('/applications', agentController.getAllApplications);
router.put('/approve/:id', agentController.approveApplication);

module.exports = router;
