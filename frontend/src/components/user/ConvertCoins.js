import React from 'react';
import '../../assets/styles/ConvertCoins.css';

const ConvertCoins = () => {
  return (
    <div className="convert-coins">
      <h1>Convert Coins</h1>
      <form className="convert-form">
        <input type="number" placeholder="Enter coins to convert" />
        <button type="submit">Convert</button>
      </form>
    </div>
  );
};

export default ConvertCoins;
