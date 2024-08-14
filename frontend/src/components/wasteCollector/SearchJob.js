import React from 'react';
import '../../assets/styles/SearchJob.css';
import jobImage from '../../assets/images/jointeam.webp';
import { Link } from 'react-router-dom';

const SearchJob = () => {
  return (
    <div className="search-job-container">
      <div className="image-section-job">
        <img src={jobImage} alt="Join our team" className="job-image" />
      </div>
      <div className="text-section">
        <h1>JOIN OUR TEAM!</h1>
        <p>
          We have openings for <strong>Drivers, Mechanics, Customer Service</strong> and <strong>Helpers</strong>. At Waste Connections, we’re proud to be a different kind of company with a different kind of culture. View employment opportunities in your area!
        </p>
        <Link to="/jobs">
        <button className="search-jobs-button">Search jobs</button></Link>
      </div>
    </div>
  );
};

export default SearchJob;
