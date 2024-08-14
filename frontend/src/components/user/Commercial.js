import React, { useState, useRef } from 'react';
import '../../assets/styles/Commercial.css';
import commercial from '../../assets/images/Commercial.jpg';
import EcoFrend from '../../assets/images/EcoFrend.jpeg';
import convenient from '../../assets/images/convenient.jpg';
import Reward from '../../assets/images/Reward.jpg';
import commun from '../../assets/images/commun.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';

const Commercial = () => {
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
      category: 'Commercial',
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
    <div className="commercial-container">
      <div className="commercial-content">
        <div className="text-and-image">
          <div className="commercial-text">
            <h2>Commercial Waste Management</h2>
            <p>
              Manage your commercial waste efficiently with our reliable and eco-friendly service. We offer tailored solutions for businesses to ensure responsible waste collection, minimizing environmental impact. Schedule pickups at your convenience and contribute to a greener community.
            </p>
            <button className="start-service-button-com" onClick={handleStartServiceClick}>Start Service</button>
            <button className="contact-service-button-com"><FontAwesomeIcon icon={faPhone} /> 123456789</button>
          </div>
          <div className="commercial-image">
            <img src={commercial} alt="Commercial Pickup" />
          </div>
        </div>
        <div className="additional-info-container">
          <h3>Why Choose Our Service?</h3>
          <p>
            Our commercial waste management service is designed to meet the unique needs of businesses. By choosing us, you support eco-friendly practices and receive rewards for your recycling efforts. Join us in making a positive impact on the environment and your community.
          </p>
          <h4>Eco-Friendly Practices</h4>
          <p>
            <img src={EcoFrend} alt="Eco-Friendly Practices" className="info-image" />
            <span>We employ sustainable methods to manage your commercial waste. From reducing carbon emissions to recycling materials, we are committed to environmental protection.</span>
          </p>
          <h4>Convenient Scheduling</h4>
          <p>
            <img src={convenient} alt="Convenient Scheduling" className="info-image" />
            <span>Our flexible scheduling options allow you to arrange pickups at your convenience. Whether you need regular service or a one-time collection, we accommodate your business needs.</span>
          </p>
          <h4>Reward System</h4>
          <p>
            <img src={Reward} alt="Reward System" className="info-image" />
            <span>Earn rewards for every pickup and recycling effort. Our reward system encourages and recognizes your commitment to a cleaner environment.</span>
          </p>
          <h4>Community Impact</h4>
          <p>
            <img src={commun} alt="Community Impact" className="info-image" />
            <span>By using our service, you contribute to the well-being of your community. Together, we can reduce waste, promote recycling, and create a healthier environment.</span>
          </p>
        </div>
        <div className="form-container-wrapper-com">
          <div className="form-container-com" ref={formRef}>
            <h3>Choose Your Waste Solution</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group-com">
                <label htmlFor="solutionType">Select Service Type:</label>
                <select id="solutionType" name="solutionType" value={formData.solutionType} onChange={handleChange} required>
                  <option value="">Select...</option>
                  <option value="For Office">For Office</option>
                  <option value="For Retail">For Retail</option>
                </select>
              </div>
              <div className="form-group-com">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
              </div>
              <div className="form-group-half-com">
                <div className="form-group-com">
                  <label htmlFor="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                  <FontAwesomeIcon icon={faUser} className="input-icon-com" />
                </div>
                <div className="form-group-com">
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  <FontAwesomeIcon icon={faUser} className="input-icon-com" />
                </div>
              </div>
              <div className="form-group-half-com">
                <div className="form-group-com">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                </div>
                <div className="form-group-com">
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                  <FontAwesomeIcon icon={faPhone} className="input-icon" />
                </div>
              </div>
              <div className="sb-com">
                <button type="submit" className="submit-button-come">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commercial;
