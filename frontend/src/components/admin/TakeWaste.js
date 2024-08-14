import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../assets/styles/TakeWaste.css'; // Import your CSS file


const TakeWaste = () => {
  const { id, userId } = useParams(); // Get the submission ID and user ID from the URL
  const [weight, setWeight] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!weight || isNaN(weight)) {
      setError('Please enter a valid weight.');
      return;
    }

    try {
      const coins = weight * 10; // Calculate coins (10 coins per kg)
      
      console.log('Request Payload:', {
          user_id: userId,
          waste_id: id,
          coins_rewarded: coins,
      });

      await axios.post('http://localhost:5000/api/coins', {
          user_id: userId, // This should be the actual user ID from the URL parameters
          waste_id: id,
          coins_rewarded: coins,
      });

      await axios.put(`http://localhost:5000/api/submit-waste/${id}`, { istaken: 1 });

      navigate('/admin/dashboard'); // Redirect after successful submission
    } catch (error) {
      setError('Error processing the request.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="take-waste-container">
      <h2>Take Waste</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="weight">Weight (in kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={handleWeightChange}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Add Coins</button>
      </form>
    </div>
  );
};

export default TakeWaste;
