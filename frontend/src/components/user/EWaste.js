import React, { useState, useRef } from 'react';
import '../../assets/styles/EWaste.css';
import ewaste from '../../assets/images/ewaste.jpg';
import EcoFrend from '../../assets/images/EcoFrend.jpeg';
import convenient from '../../assets/images/convenient.jpg';
import Reward from '../../assets/images/Reward.jpg';
import commun from '../../assets/images/commun.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';

const EWaste = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    solutionType: '',
    address: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const formRef = useRef(null);
  const { user } = useAuth(); // Get user from auth context

  const handleStartServiceClick = () => {
    setShowForm(true);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      alert('User not logged in');
      return;
    }

    const data = {
      userId: user.id,
      category: 'E-Waste',
      ...formData
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
        // Reset form if needed
        setFormData({
          solutionType: '',
          address: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
        });
        setShowForm(false);
      } else {
        alert('Failed to submit request');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting your request.');
    }
  };

  return (
    <div className="ewaste-container">
      <div className="ewaste-content">
        <div className="text-and-image">
          <div className="ewaste-text">
            <h2>E-Waste Disposal</h2>
            <p>
              Safely dispose of your electronic waste with our eco-friendly service. We ensure that your e-waste is recycled responsibly, minimizing environmental impact. Schedule pickups at your convenience and contribute to a cleaner, greener community by disposing of your electronic waste properly.
            </p>
            <button className="start-service-button-e" onClick={handleStartServiceClick}>Start Service</button>
            <button className="contact-service-button-e"><FontAwesomeIcon icon={faPhone} /> 123456789</button>
          </div>
          <div className="ewaste-image">
            <img src={ewaste} alt="E-Waste Disposal" />
          </div>
        </div>
        <div className="additional-info-container">
          <h3>Why Choose Our Service?</h3>
          <p>
            Our service offers a reliable and efficient solution for your electronic waste management. By choosing us, you contribute to a cleaner environment and ensure your e-waste is handled responsibly. Join us in making a positive impact on our community and the planet.
          </p>
          <h4>Responsible Recycling</h4>
          <p>
            <img src={EcoFrend} alt="Responsible Recycling" className="info-image" />
            <span>We employ eco-friendly practices to ensure that your e-waste is managed sustainably. From reducing carbon emissions to recycling materials, we are committed to protecting the environment.</span>
          </p>
          <h4>Convenient Scheduling</h4>
          <p>
            <img src={convenient} alt="Convenient Scheduling" className="info-image" />
            <span>Our flexible scheduling options allow you to arrange pickups at your convenience. Whether you need a regular service or a one-time collection, we are here to accommodate your needs.</span>
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
        <div className="form-container-wrapper-e">
          <div className="form-container-e" ref={formRef}>
            <h3>Choose Your Waste Solution</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group-e">
                <label htmlFor="solutionType">Select Service Type:</label>
                <select id="solutionType" name="solutionType" value={formData.solutionType} onChange={handleChange} required>
                  <option value="">Select...</option>
                  <option value="home">For Home</option>
                  <option value="organization">For Organization</option>
                </select>
              </div>
              <div className="form-group-e">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
              </div>
              <div className="form-group-half-e">
                <div className="form-group-e">
                  <label htmlFor="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                  <FontAwesomeIcon icon={faUser} className="input-icon-e" />
                </div>
                <div className="form-group-e">
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  <FontAwesomeIcon icon={faUser} className="input-icon-e" />
                </div>
              </div>
              <div className="form-group-half-e">
                <div className="form-group-e">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                </div>
                <div className="form-group-e">
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                  <FontAwesomeIcon icon={faPhone} className="input-icon" />
                </div>
              </div>
              <div className='sb-e'>
                <button type="submit" className="submit-button-e">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EWaste;
