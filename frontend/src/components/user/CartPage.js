import React, { useState } from 'react';
import '../../assets/styles/CartPage.css';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
      {
        id: 1,
        name: 'Stylish Jacket',
        coins: 59.99,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        name: 'Cool Sneakers',
        coins: 89.99,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 3,
        name: 'Leather Wallet',
        coins: 29.99,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
      },
      // Duplicate items for demonstration
      {
        id: 4,
        name: 'Stylish Jacket',
        coins: 59.99,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 5,
        name: 'Cool Sneakers',
        coins: 89.99,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 6,
        name: 'Leather Wallet',
        coins: 29.99,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
      },
    ]);
  
    const handleRemoveItem = (id) => {
      setCartItems(cartItems.filter((item) => item.id !== id));
    };
  
    const handleQuantityChange = (id, delta) => {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
      );
    };
  
    const getTotalcoins = () => {
      return cartItems.reduce((total, item) => total + item.coins * item.quantity, 0).toFixed(2);
    };
  
    return (
      <div className="cart-container">
        <h2 className="cart-title">Your Shopping Cart</h2>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>${item.coins.toFixed(2)}</p>
                <div className="cart-item-quantity">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Total: ${getTotalcoins()}</h3>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      </div>
    );
  };
  
  export default CartPage;