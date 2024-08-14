import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/NeedHelp.css';

const NeedHelp = () => {
    return (
        <div className="need-help-container">
            <div className="need-help-content">
                <h1 className="need-help-heading">Need help?</h1>
                <p className="need-help-subtext">
                    Take care of your issue online or connect with a support agent.
                </p>
                <Link to='help-and-support'><button className="need-help-button">Go to Support</button></Link>
            </div>
        </div>
    );
};

export default NeedHelp;
