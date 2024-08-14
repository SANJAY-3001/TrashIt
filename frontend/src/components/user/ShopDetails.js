import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/ShopDetails.css';

const ShopDetails = () => {
  const location = useLocation();
  const { productName, img, coins, description, rating } = location.state;

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="shop-details">
      <div className="details-container">
        <div className="image-section">
          <img src={img} alt={productName} />
        </div>
        <div className="info-section">
          <h1>{productName}</h1>
          <p>{description}</p>
          <div className="coins">Coins needed: {coins}</div>
          <div className="rating">Rating: {rating} ★</div>
          <div className="quantity-selector">
            <button onClick={decreaseQuantity}><FontAwesomeIcon icon={faMinus} /></button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}><FontAwesomeIcon icon={faPlus} /></button>
          </div>
          <div className="actions">
            <button className="add-to-wishlist">
              <FontAwesomeIcon icon={faHeart} /> Add to Wishlist
            </button>
            <button className="add-to-cart">
              <FontAwesomeIcon icon={faShoppingBag} /> Add to Cart
            </button>
            <button className="buy-now">
              <FontAwesomeIcon icon={faShoppingBag} /> Buy Now
            </button>
          </div>
          <div className="delivery-info">
            <p>Standard delivery 2-5 working days</p>
            <p>Next day delivery order before 2pm ($5.79)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
