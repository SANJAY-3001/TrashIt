import React from 'react';
import '../../assets/styles/SubNavbar.css';
import { FaQuestionCircle, FaClock, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SubNavbar = () => {
    return (
        <div className="sub-navbar">
            <Link to="/how-are-we-doing" className="subnav-item">
                <FaQuestionCircle className="subnav-icon" />
                <span>How are we doing</span>
            </Link>
            <Link to="/schedule" className="subnav-item">
                <FaClock className="subnav-icon" />
                <span>Schedule</span>
            </Link>
            <Link to="/help-and-support" className="subnav-item">
                <FaEnvelope className="subnav-icon" />
                <span>Help & Support</span>
            </Link>
        </div>
    );
}

export default SubNavbar;
