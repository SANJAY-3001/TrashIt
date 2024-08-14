// controllers/CoinController.js
const pool = require('../config/db'); // Import your database connection

const CoinController = {
    addCoins: (req, res) => {
        const { user_id, waste_id, coins_rewarded } = req.body;

        // Start a transaction
        pool.query('START TRANSACTION', (err) => {
            if (err) {
                console.error('Error starting transaction:', err);
                return res.status(500).json({ message: 'Error starting transaction', error: err });
            }

            // Insert the new coin record
            pool.query(
                'INSERT INTO coin (user_id, waste_id, coins_rewarded) VALUES (?, ?, ?)',
                [user_id, waste_id, coins_rewarded],
                (err) => {
                    if (err) {
                        console.error('Error inserting coin:', err);
                        return pool.query('ROLLBACK', () => {
                            res.status(500).json({ message: 'Error inserting coin', error: err });
                        });
                    }

                    // Check if the user already has a total_coins entry
                    pool.query(
                        'SELECT id, total_coins FROM user_total_coins WHERE user_id = ?',
                        [user_id],
                        (err, results) => {
                            if (err) {
                                console.error('Error checking user total coins:', err);
                                return pool.query('ROLLBACK', () => {
                                    res.status(500).json({ message: 'Error checking user total coins', error: err });
                                });
                            }

                            if (results.length > 0) {
                                // User exists, update the total coins
                                const newTotal = results[0].total_coins + coins_rewarded;
                                pool.query(
                                    'UPDATE user_total_coins SET total_coins = ? WHERE user_id = ?',
                                    [newTotal, user_id],
                                    (err) => {
                                        if (err) {
                                            console.error('Error updating user total coins:', err);
                                            return pool.query('ROLLBACK', () => {
                                                res.status(500).json({ message: 'Error updating user total coins', error: err });
                                            });
                                        }

                                        // Commit the transaction
                                        pool.query('COMMIT', (err) => {
                                            if (err) {
                                                console.error('Error committing transaction:', err);
                                                return res.status(500).json({ message: 'Error committing transaction', error: err });
                                            }

                                            res.status(200).json({ message: 'Coins added and user total coins updated successfully' });
                                        });
                                    }
                                );
                            } else {
                                // User does not exist, create a new entry
                                pool.query(
                                    'INSERT INTO user_total_coins (user_id, total_coins) VALUES (?, ?)',
                                    [user_id, coins_rewarded],
                                    (err) => {
                                        if (err) {
                                            console.error('Error inserting user total coins:', err);
                                            return pool.query('ROLLBACK', () => {
                                                res.status(500).json({ message: 'Error inserting user total coins', error: err });
                                            });
                                        }

                                        // Commit the transaction
                                        pool.query('COMMIT', (err) => {
                                            if (err) {
                                                console.error('Error committing transaction:', err);
                                                return res.status(500).json({ message: 'Error committing transaction', error: err });
                                            }

                                            res.status(200).json({ message: 'Coins added and user total coins updated successfully' });
                                        });
                                    }
                                );
                            }
                        }
                    );
                }
            );
        });
    },

    getCoinHistoryByUserId: (req, res) => {
        const userId = req.params.userId;

        const query = `
            SELECT 
                c.id AS coin_id,
                c.waste_id,
                c.coins_rewarded,

                sw.id AS submit_waste_id,
                sw.category,
                sw.solution_type,
                sw.address,
                sw.first_name,
                sw.last_name,
                sw.email,
                sw.phone,
                sw.created_at AS waste_created_at,
                sw.istaken
            FROM 
                coin c
            JOIN 
                submit_waste sw ON c.waste_id = sw.id
            WHERE 
                c.user_id = ?
            ORDER BY 
                sw.created_at DESC
        `;

        pool.query(query, [userId], (err, results) => {
            if (err) {
                console.error('Error fetching coin history:', err);
                return res.status(500).json({ message: 'Error fetching coin history', error: err });
            }

            if (results.length === 0) {
                return res.status(404).json({ message: 'No coin history found for this user' });
            }

            res.status(200).json(results);
        });
    },

    getTotalCoinsByUserId: (req, res) => {
        const userId = req.params.userId;

        // Query to fetch total coins by user ID
        const query = 'SELECT total_coins FROM user_total_coins WHERE user_id = ?';

        pool.query(query, [userId], (error, results) => {
            if (error) {
                console.error('Error retrieving coins:', error);
                return res.status(500).json({ error: 'An error occurred while retrieving total coins' });
            }

            if (results.length === 0) {
                return res.status(404).json({ message: 'No coins found for the given user ID' });
            }

            const totalCoins = results[0].total_coins;
            res.status(200).json({ total_coins: totalCoins });
        });
    }
};

module.exports = CoinController;
