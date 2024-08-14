// src/components/PaymentOptions.js
import React from 'react';
import '../../assets/styles/PaymentOptions.css';
import credit from '../../assets/images/credit.jpg';
import bitcoin from '../../assets/images/bitcoin.jpg';
import paypal from '../../assets/images/paypal.jpg';

const PaymentOptions = () => {
  return (
    <div className="payment-options-container">
      <h2>Payment Options</h2>
      <div className="payment-cards">
        <div className="payment-card">
          <input type="radio" id="credit-card" name="payment-method" value="credit-card" />
          <label htmlFor="credit-card">
            <img src={credit} alt="Credit Card" />
            <span>Credit Card</span>
          </label>
        </div>
        <div className="payment-card">
          <input type="radio" id="paypal" name="payment-method" value="paypal" />
          <label htmlFor="paypal">
            <img src={paypal} alt="PayPal" />
            <span>PayPal</span>
          </label>
        </div>
        <div className="payment-card">
          <input type="radio" id="crypto" name="payment-method" value="crypto" />
          <label htmlFor="crypto">
            <img src={bitcoin} alt="Cryptocurrency" />
            <span>Cryptocurrency</span>
          </label>
        </div>
      </div>
      <button type="submit" className="action-button">Proceed to Payment</button>
    </div>
  );
};

export default PaymentOptions;
