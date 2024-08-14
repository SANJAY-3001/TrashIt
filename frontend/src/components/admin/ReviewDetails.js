import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/styles/ReviewDetails.css'; // Ensure you have the correct CSS file path

const ReviewDetails = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reviews');
        setReviews(response.data.reviews);
      } catch (err) {
        setError('Error fetching reviews.');
        console.error(err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="review-details-container">
      <h1>All Reviews</h1>
      {error && <p className="error-message">{error}</p>}
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <table className="reviews-table">
          <thead>
            <tr>
              <th>Review ID</th>
              <th>County</th>
              <th>Service Rating</th>
              <th>Contacted Customer Care</th>
              <th>Suggestions</th>
              <th>Other Locations</th>
  
              <th>User Name</th>
              <th>User Email</th>
              <th>Review Created At</th>
              <th>User Created At</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map(review => (
              <tr key={review.review_id}>
                <td>{review.review_id}</td>
                <td>{review.county}</td>
                <td>{review.service_rating}</td>
                <td>{review.contacted_customer_care}</td>
                <td>{review.suggestions}</td>
                <td>{review.other_locations}</td>
    

                <td>{review.user_name}</td>
                <td>{review.user_email}</td>
                <td>{new Date(review.review_created_at).toLocaleString()}</td>
                <td>{new Date(review.user_created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReviewDetails;
