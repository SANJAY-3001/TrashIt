import React, { useState, useRef } from 'react';
import '../../assets/styles/Resident.css';
import resident from '../../assets/images/resident.png';
import EcoFrend from '../../assets/images/EcoFrend.jpeg';
import convenient from '../../assets/images/convenient.jpg';
import Reward from '../../assets/images/Reward.jpg';
import commun from '../../assets/images/commun.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';

const Resident = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);
  const { user } = useAuth();

  const handleStartServiceClick = () => {
    setShowForm(true);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
      userId: user ? user.id : null, // Pass userId from AuthContext
      category: 'Resident', // Match the enum value
      solutionType: formData.get('solutionType'),
      address: formData.get('address'),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    try {
      const response = await fetch('http://localhost:5000/api/submit-waste', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Service request submitted successfully!');
      } else {
        alert('Failed to submit request');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting your request.');
    }
  };

  
  return (
    <div className="resident-container">
      <div className="resident-content">
        <div className="text-and-image">
          <div className="resident-text">
            <h2>Residential Garbage Pickup</h2>
            <p>
              Efficiently manage your household waste with our convenient and eco-friendly pickup service. Our team ensures your waste is collected responsibly, minimizing environmental impact. Schedule pickups at your convenience, and earn rewards for recycling. Choose our service for a cleaner, greener community.
            </p>
            <button className="start-service-button-res" onClick={handleStartServiceClick}>Start Service</button>
            <button className="contact-service-button-res"><FontAwesomeIcon icon={faPhone} /> 123456789</button>
          </div>
          <div className="resident-image">
            <img src={resident} alt="Resident Pickup" />
          </div>
        </div>
        <div className="additional-info-container">
          <h3>Why Choose Our Service?</h3>
          <p>
            Our service offers a reliable and efficient solution for your household waste management. By choosing us, you contribute to a cleaner environment and receive rewards for your recycling efforts. Join us in making a positive impact on our community and the planet.
          </p>
          <h4>Eco-Friendly Practices</h4>
          <p>
            <img src={EcoFrend} alt="Eco-Friendly Practices" className="info-image" />
            <span>We employ eco-friendly practices to ensure that your waste is managed in the most sustainable way possible. From reducing carbon emissions to recycling materials, we are committed to protecting the environment.</span>
          </p>
          <h4>Convenient Scheduling</h4>
          <p>
            <img src={convenient} alt="Convenient Scheduling" className="info-image" />
            <span>Our flexible scheduling options allow you to arrange pickups at your convenience. Whether you need a regular weekly service or a one-time collection, we are here to accommodate your needs.</span>
          </p>
          <h4>Reward System</h4>
          <p>
            <img src={Reward} alt="Reward System" className="info-image" />
            <span>Earn rewards for every pickup and recycling effort you make. Our reward system is designed to encourage and recognize your commitment to a cleaner community.</span>
          </p>
          <h4>Community Impact</h4>
          <p>
            <img src={commun} alt="Community Impact" className="info-image" />
            <span>By using our service, you are contributing to the well-being of your community. Together, we can reduce waste, promote recycling, and create a healthier environment for everyone.</span>
          </p>
        </div>
        <div className="form-container-wrapper-res">
          <div className="form-container-res" ref={formRef}>
            <h3>Choose Your Waste Solution</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group-res">
                <label htmlFor="solutionType">Select Service Type:</label>
                <select id="solutionType" name="solutionType" required>
                <option value="">Select...</option>
                <option value="For Home">For Home</option>
                <option value="For Appliance">For Appliance</option>
              </select>
              
              </div>
              <div className="form-group-res">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />
                <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
              </div>
              <div className="form-group-half-res">
                <div className="form-group-res">
                  <label htmlFor="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" required />
                  <FontAwesomeIcon icon={faUser} className="input-icon-pro" />
                </div>
                <div className="form-group-res">
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" required />
                  <FontAwesomeIcon icon={faUser} className="input-icon-pro" />
                </div>
              </div>
              <div className="form-group-half-res">
                <div className="form-group-res">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                </div>
                <div className="form-group-res">
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" id="phone" name="phone" required />
                  <FontAwesomeIcon icon={faPhone} className="input-icon" />
                </div>
              </div>
              <div className='sb-res'>
                <button type="submit" className="submit-button-resi">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resident;
