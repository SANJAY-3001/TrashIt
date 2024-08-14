const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Route to post a new review
router.post('/review', reviewController.createReview);

// Route to get all reviews (for admin)
router.get('/reviews', reviewController.getAllReviewsWithUserDetails);

module.exports = router;
