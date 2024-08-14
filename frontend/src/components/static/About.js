import React from 'react';
import '../../assets/styles/About.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <section className="about-section" id="AboutUs">
        <div className="about-content-container">
          <div className="about-text-container">
            <span className="about-title">About TrashIt</span>
            <span className="about-sub-title">Your partner in waste management</span>
            <div className="about-description">
              <p>At TrashIt, we are committed to transforming waste management through innovative solutions. Our mission is to simplify waste disposal while promoting sustainability. We offer an intuitive platform for residents and businesses to manage their waste effectively, helping you contribute to a cleaner environment.</p>
              <p>Join us on our journey to revolutionize waste management and make a positive impact on the planet. Discover how our services can help you manage your waste more efficiently and responsibly.</p>
            </div>
            <div className="about-buttons">
              <Link to="#OurMission" className="about-btn1">Our Mission</Link>
              <Link to="" className="about-btn2">Learn More</Link>
            </div>
          </div>
          <div className="about-image-container">
            <img 
              src="https://images.unsplash.com/photo-1499083097717-a156f85f0516?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" 
              alt="About Us" 
            />
          </div>
        </div>
      </section>
      
      <section className="about-section" id="OurMission">
        <div className="about-content-container">
          <div className="about-image-container">
            <img 
              src="https://images.unsplash.com/photo-1499083097717-a156f85f0516?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" 
              alt="Our Mission" 
            />
          </div>
          <div className="about-text-container">
            <span className="about-title">Our Mission</span>
            <span className="about-sub-title">Making waste management simple and sustainable</span>
            <div className="about-description">
              <p>Our mission at TrashIt is to provide a comprehensive and user-friendly platform that makes waste management easy for everyone. We strive to promote sustainability and environmental responsibility by offering solutions that reduce waste and encourage recycling and proper disposal practices.</p>
              <p>We are dedicated to creating a greener future through innovation, education, and community engagement. Learn more about our initiatives and how you can get involved in making a difference.</p>
            </div>
            <div className="about-buttons">
              <Link to="" className="about-btn2">Discover More</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
