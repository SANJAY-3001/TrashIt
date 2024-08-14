import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFileAlt, faUserShield, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../context/DarkModeContext';
import '../../assets/styles/Dashboard.css';

const Dashboard = () => {
    const { darkMode } = useDarkMode();

    return (
        <div className={`dashboard-page ${darkMode ? 'dark-mode' : ''}`}>
            <header className="dashboard-header">
                <h1>Welcome, Admin</h1>
                <p>Your management dashboard at a glance.</p>
            </header>

            <div className="dashboard-overview">
                <div className="overview-card">
                    <FontAwesomeIcon icon={faUsers} className="card-icon" />
                    <h3>Total Users</h3>
                    <p>150</p>
                    <span>+10 today</span>
                </div>
                <div className="overview-card">
                    <FontAwesomeIcon icon={faFileAlt} className="card-icon" />
                    <h3>New Submissions</h3>
                    <p>25</p>
                    <span>+5 today</span>
                </div>
                <div className="overview-card">
                    <FontAwesomeIcon icon={faUserShield} className="card-icon" />
                    <h3>Agents Active</h3>
                    <p>10</p>
                    <span>+2 today</span>
                </div>
                <div className="overview-card">
                    <FontAwesomeIcon icon={faCommentDots} className="card-icon" />
                    <h3>Feedback Received</h3>
                    <p>20</p>
                    <span>+3 today</span>
                </div>
            </div>

            <div className="dashboard-details">
                <div className="details-card">
                    <h3>User Activities</h3>
                    <p>Recent user activities and interactions.</p>
                </div>
                <div className="details-card">
                    <h3>Agent Performance</h3>
                    <p>Metrics and performance insights.</p>
                </div>
                <div className="details-card">
                    <h3>System Notifications</h3>
                    <p>Latest alerts and notifications.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
