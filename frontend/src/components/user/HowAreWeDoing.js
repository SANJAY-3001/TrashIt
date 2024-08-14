import React, { useState } from 'react';
import '../../assets/styles/HowAreWeDoing.css';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const HowAreWeDoing = () => {
  const { user } = useAuth();
  const [county, setCounty] = useState('');
  const [serviceRating, setServiceRating] = useState('');
  const [contactedCustomerCare, setContactedCustomerCare] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [otherLocations, setOtherLocations] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('User not logged in.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/review', {
        county,
        service_rating: serviceRating,
        contacted_customer_care: contactedCustomerCare,
        suggestions,
        other_locations: otherLocations,
        user_id: user.id, // Include user ID from AuthContext
      });
      alert('Thank you for your feedback!');
      // Reset form fields
      setCounty('');
      setServiceRating('');
      setContactedCustomerCare('');
      setSuggestions('');
      setOtherLocations('');
    } catch (err) {
      setError('Error submitting the survey.');
      console.error(err);
    }
  };

  return (
    <div className="how-are-we-doing-container">
      <div className="hero-section-how">
        <img src={require('../../assets/images/f2.png')} alt="How are we doing" className="hero-image" />
        <div className="hero-text">
          <h1>How are we doing?</h1>
        </div>
      </div>
      <div className="content">
        <div className="survey-container">
          <div className="survey-header">
            <img src={require('../../assets/images/newlogo.png')} alt="Trashit" className="company-logo" />
            <h1 className="company-name"></h1>
          </div>
          <h2>Customer Satisfaction Survey</h2>
          <p className="survey-intro">
            Thank you! We realize how important your feedback is to our continued improvement and success. 
            We truly appreciate your time to help us ensure your expectations are continually being met. 
            We value your feedback and appreciate your loyalty and business.
          </p>
          <hr />
          {error && <p className="error-message">{error}</p>}
          <form className="survey-form" onSubmit={handleSubmit}>
            <div className="form-group-hd">
              <label htmlFor="county">Please enter your County of Residence <span className="required">*</span></label>
              <input
                type="text"
                id="county"
                className="form-control"
                placeholder="Enter your county"
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group-hd">
              <label>Are your current services meeting your needs? <span className="required">*</span></label>
              <div className="rating-group">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label key={rating} className="rating-label">
                    <input
                      type="radio"
                      name="serviceRating"
                      value={rating}
                      checked={serviceRating === rating.toString()}
                      onChange={(e) => setServiceRating(e.target.value)}
                      required
                    />
                    <span className="rating-icon">{rating}</span>
                    <span className="rating-text">{rating === 1 ? "Very Unsatisfied" : rating === 5 ? "Very Satisfied" : ""}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group-hd">
              <label htmlFor="contactedCustomerCare">Have you ever contacted our Customer Care Team before? <span className="required">*</span></label>
              <textarea
                id="contactedCustomerCare"
                className="form-control"
                placeholder="If so, please share your experience"
                value={contactedCustomerCare}
                onChange={(e) => setContactedCustomerCare(e.target.value)}
                required
              />
            </div>
            <div className="form-group-hd">
              <label htmlFor="suggestions">Do you have any suggestions on improving your current service? <span className="required">*</span></label>
              <textarea
                id="suggestions"
                className="form-control"
                placeholder="Please explain"
                value={suggestions}
                onChange={(e) => setSuggestions(e.target.value)}
                required
              />
            </div>
            <div className="form-group-hd">
              <label htmlFor="otherLocations">Are there other locations of your business or businesses that you recommend we call upon? <span className="required">*</span></label>
              <textarea
                id="otherLocations"
                className="form-control"
                placeholder="If so, please provide the contact information here"
                value={otherLocations}
                onChange={(e) => setOtherLocations(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button-how">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HowAreWeDoing;
