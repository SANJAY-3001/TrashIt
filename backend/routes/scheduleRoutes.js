const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

// Route to handle scheduling a pickup
router.post('/schedule', scheduleController.schedulePickup);
router.get('/schedules', scheduleController.getScheduleWithUserDetails);
// Export the router to be used in the main application
module.exports = router;
