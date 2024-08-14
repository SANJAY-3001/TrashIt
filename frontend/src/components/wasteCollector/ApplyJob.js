import React, { useState } from 'react';
import Apply from '../../assets/images/applyJob.jpeg';
import '../../assets/styles/ApplyJob.css';

function ApplyJob() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        city: '',
        state_province: '',
        country: '',
        postal_code: '',
        privacy_policy_accepted: false,
        text_notifications: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/apply-job', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Application submitted successfully') {
                alert('Your application has been submitted successfully!');
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    city: '',
                    state_province: '',
                    country: '',
                    postal_code: '',
                    privacy_policy_accepted: false,
                    text_notifications: false
                });
            } else {
                alert('There was an issue submitting your application.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your application.');
        });
    };

    return (
      <div className="apply-job-container">
        <div className="content-job">
          <div className="left-side-job">
            <h1>Sign up for to get alerts for the right job for you!</h1>
            <div className="upload-section">
              <p>Join faster by uploading your resume/cv</p>
              <div className="upload-buttons">
                <button className="upload-button">Upload from Dropbox</button>
                <button className="upload-button">Upload from OneDrive</button>
                <button className="upload-button green">Upload Resume</button>
              </div>
            </div>
          </div>
          <div className="right-side-job">
            <img src={Apply} alt="Worker" />
          </div>
        </div>
        <div className="form-job">
        <form onSubmit={handleSubmit}>
          <div className="form-group-job">
            <label>First Name*</label>
            <input 
              type="text" 
              name="first_name" 
              value={formData.first_name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group-job">
            <label>Last Name*</label>
            <input 
              type="text" 
              name="last_name" 
              value={formData.last_name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group-job">
            <label>Email Address*</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group-job">
            <label>Phone Number*</label>
            <input 
              type="tel" 
              name="phone_number" 
              value={formData.phone_number} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group-job">
            <label>City*</label>
            <input 
              type="text" 
              name="city" 
              value={formData.city} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group-job">
            <label>State/Province*</label>
            <input 
              type="text" 
              name="state_province" 
              value={formData.state_province} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group-job">
            <label>Country*</label>
            <input 
              type="text" 
              name="country" 
              value={formData.country} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group-job">
            <label>Postal Code</label>
            <input 
              type="text" 
              name="postal_code" 
              value={formData.postal_code} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group-job-checkbox">
            <input 
              type="checkbox" 
              name="privacy_policy_accepted" 
              checked={formData.privacy_policy_accepted} 
              onChange={handleChange} 
              required 
            />
            <label>
              I have reviewed the Waste Connections privacy policy and terms of use and would like to receive email communications from Waste Connections regarding employment.
            </label>
          </div>
          <div className="form-group-job-checkbox">
            <input 
              type="checkbox" 
              name="text_notifications" 
              checked={formData.text_notifications} 
              onChange={handleChange} 
            />
            <label>
              Yes, please text me regarding relevant Waste Connections employment opportunities.
            </label>
          </div>
          <button className="apply-btn" type="submit">SUBMIT</button>
        </form>
      </div>
      
      </div>
    );
}

export default ApplyJob;
