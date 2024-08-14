const express = require('express');
const router = express.Router();
const CoinController = require('../controllers/CoinController');

// Route to add coins and update user's total coins
router.post('/', CoinController.addCoins);

// Route to get coin history by user ID
router.get('/history/:userId', CoinController.getCoinHistoryByUserId);
router.get('/total-coins/:userId', CoinController.getTotalCoinsByUserId);
module.exports = router;
