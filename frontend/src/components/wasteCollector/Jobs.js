import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Jobs.css';

const Jobs = () => {
  return (
    <div className="jobs-page">
      <header className="header-section-jobs">
        <div className="header-text-jobs">
          <h1>WHERE TO?</h1>
          <p>A CULTURE THAT WELCOMES YOU IN.</p>
        </div>
      </header>

      <section className="call-to-action-section">
        <h2>Stay Connected!</h2>
        <p>We will notify you about relevant positions, and keep you in mind whenever we have interesting opportunities. Come get them.</p>
        <Link to="/apply-job">
        <button className="join-button">Join Now</button></Link>
      </section>

      <section className="job-description-section">
        <h3>Pick your destination. We’ll help you get there.</h3>
        <p>
          That’s how we’ve been growing our local teams and our national recognition for more than 20 years. Our culture is rooted in the idea that our leaders are here to serve our employees. That means wherever you’re headed on your journey – to a new role, to a better lifestyle, or simply to those moments on the job that stick with you – rest assured, we’ll be there to support you every step of the way.
        </p>
        <h4>Waste Collector Job Description</h4>
        <ul>
          <li>Operate garbage trucks to collect and transport waste.</li>
          <li>Ensure the safe and timely collection of waste from residential and commercial areas.</li>
          <li>Inspect trucks for any safety or maintenance issues.</li>
          <li>Communicate with dispatchers regarding route changes and customer requests.</li>
          <li>Adhere to safety protocols and company policies.</li>
          <li>Provide excellent customer service to residents and businesses.</li>
          <li>Assist in recycling efforts and waste reduction initiatives.</li>
        </ul>
      </section>
    </div>
  );
};

export default Jobs;
