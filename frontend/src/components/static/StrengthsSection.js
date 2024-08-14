import React from 'react';
import '../../assets/styles/StrengthsSection.css';

import { FaAward, FaCheckCircle, FaClipboardCheck, FaLaptop, FaUsers, FaBriefcase } from 'react-icons/fa';


const StrengthsSection = () => {
    return (
        <section className="strengths-section">
            <div className="overlay"></div>
            <div className="content-str">
                <h2 className="title-str">OUR STRENGTHS</h2>
                <div className="strengths-grid">
                    <div className="strength-item">
                        <FaAward className="icon" />
                        <p>10+ Years of expertise in waste management</p>
                    </div>
                    <div className="strength-item">
                        <FaCheckCircle className="icon" />
                        <p>Authorized end destinations for all waste streams</p>
                    </div>
                    <div className="strength-item">
                        <FaClipboardCheck className="icon" />
                        <p>Compliant with all laws on labour & waste management</p>
                    </div>
                    <div className="strength-item">
                        <FaLaptop className="icon" />
                        <p>Data and technology driven processes ensuring transparency</p>
                    </div>
                    <div className="strength-item">
                        <FaBriefcase className="icon" />
                        <p>Dignified & safe careers that have uplifted the socio-economic status</p>
                    </div>
                    <div className="strength-item">
                        <FaUsers className="icon" />
                        <p>Professional & diverse core team</p>
                    </div>
                </div>
                </div>
                </section>
    );
}

export default StrengthsSection;