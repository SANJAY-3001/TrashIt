const db = require('../config/db');



// Function to handle creating a review
exports.createReview = (req, res) => {
  const { county, service_rating, contacted_customer_care, suggestions, other_locations, user_id } = req.body;

  if (!county || !service_rating || !user_id) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  const query = 'INSERT INTO review (county, service_rating, contacted_customer_care, suggestions, other_locations, user_id) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [county, service_rating, contacted_customer_care, suggestions, other_locations, user_id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Review submitted successfully' });
  });
};



// Function to get all reviews with user details (for admin)
exports.getAllReviewsWithUserDetails = (req, res) => {
  const query = `
    SELECT 
      review.id AS review_id,
      review.county,
      review.service_rating,
      review.contacted_customer_care,
      review.suggestions,
      review.other_locations,
      review.created_at AS review_created_at,
      user.id AS user_id,
      user.name AS user_name,
      user.email AS user_email,
      user.created_at AS user_created_at
    FROM 
      review
    JOIN 
      user 
    ON 
      review.user_id = user.id
    ORDER BY 
      review.created_at DESC
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.status(200).json({ reviews: results });
  });
};

