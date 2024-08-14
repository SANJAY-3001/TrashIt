import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/ViewCoins.css';
import Lottie from "lottie-react";
import PropTypes from 'prop-types';
import CoinAnime from '../../CoinAnime.json';
import ConvertCoins from './ConvertCoins'; // Import the ConvertCoins component
import { useAuth } from '../context/AuthContext'; // Import the AuthContext

const ViewCoins = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // Get user from AuthContext
  const [totalCoins, setTotalCoins] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [showConvertCoins, setShowConvertCoins] = useState(false);

  useEffect(() => {
    if (user) {
      // Fetch total coins
      fetch(`http://localhost:5000/api/coins/total-coins/${user.id}`)
        .then(response => response.json())
        .then(data => setTotalCoins(data.total_coins || 0)) // Default to 0 if no coins
        .catch(error => {
          console.error('Error fetching total coins:', error);
          setTotalCoins(0); // Default to 0 on error
        });

      // Fetch coin history
      fetch(`http://localhost:5000/api/coins/history/${user.id}`)
        .then(response => response.json())
        .then(data => setTransactions(data))
        .catch(error => {
          console.error('Error fetching coin history:', error);
          setTransactions([]); // Default to empty array on error
        });
    }
  }, [user]);

  const handleConvertCoinsClick = () => {
    setShowConvertCoins(true);
  };

  const handleRedeemNowClick = () => {
    navigate('/shop');
  };

  return (
    <div className="view-coins-page">
      <div className="left-side">
        <div className="coin-display">
          <div className="coin-graphic">
            <Lottie animationData={CoinAnime} />
          </div>
          <h2>My Coins: {totalCoins}</h2>
        </div>
        <div className="coin-buttons">
          <button className="redeem-button" onClick={handleRedeemNowClick}>Redeem Now</button>
          <button className="convert-button" onClick={handleConvertCoinsClick}>Convert Coins</button>
        </div>
      </div>
      <div className="activity-container">
        <h3>Your Activities</h3>
        {transactions.length === 0 ? (
          <p>No activities found.</p>
        ) : (
          transactions.slice(0, 5).map((transaction, index) => (
            <div key={index} className="transaction">
              <p>Date: {new Date(transaction.waste_created_at).toLocaleDateString()}</p>
              <p>Amount: {transaction.coins_rewarded} Coins</p>
              <p>Type: {transaction.category} - {transaction.solution_type}</p>

            </div>
          ))
        )}
      </div>
      {/* ConvertCoins section */}
      {showConvertCoins && (
        <div className="convert-coins-container">
          <ConvertCoins />
        </div>
      )}
    </div>
  );
};

// Define prop types
ViewCoins.propTypes = {
  transactions: PropTypes.array
};

// Default props
ViewCoins.defaultProps = {
  transactions: []
};

export default ViewCoins;
