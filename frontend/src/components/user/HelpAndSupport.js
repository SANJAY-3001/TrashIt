// import React from 'react';
// import '../../assets/styles/HelpAndSupport.css';

// const HelpAndSupport = () => {
//   return (
//     <div className="support-container">
//       <div className="support-header">
//         <img src={require('../../assets/images/newlogo.png')} alt="Trashit" className="company-logo" />
//         <h1 className="company-name">Trashit Help and Support</h1>
//       </div>
//       <h2>We're Here to Help!</h2>
//       <p className="support-intro">
//         Thank you for using Trashit! We're committed to helping you manage your waste efficiently and earn rewards.
//         If you have any questions or need assistance, please fill out the form below and our support team will get back to you as soon as possible.
//       </p>
//       <hr />
//       <form className="support-form">
//         <div className="form-group">
//           <label htmlFor="name">Your Name <span className="required">*</span></label>
//           <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Your Email <span className="required">*</span></label>
//           <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="issueType">What is your issue related to? <span className="required">*</span></label>
//           <select id="issueType" className="form-control" required>
//             <option value="">Please Select</option>
//             <option value="waste-collection">Waste Collection</option>
//             <option value="coins-rewards">Coins and Rewards</option>
//             <option value="website-issues">Website Issues</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Your Message <span className="required">*</span></label>
//           <textarea id="message" className="form-control" placeholder="Describe your issue or question" required></textarea>
//         </div>
//         <button type="submit" className="submit-button">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default HelpAndSupport;

import React from 'react';
import '../../assets/styles/HelpAndSupport.css';

const HelpAndSupport = () => {
  return (
    <div className="support-container">
      <div className="support-header">
        <img src={require('../../assets/images/commercials.jpg')} alt="Help and Support Banner" className="banner-image" />
        <div className="overlay">
          <h1>Trashit Help and Support</h1>
        </div>
      </div>
      <div className="form-container-help">
        <h2>We're Here to Help!</h2>
        <p className="support-intro">
          Thank you for using Trashit! We're committed to helping you manage your waste efficiently and earn rewards.
          If you have any questions or need assistance, please fill out the form below and our support team will get back to you as soon as possible.
        </p>
        <hr />
        <form className="support-form">
          <div className="form-group-help">
            <label htmlFor="name">Your Name <span className="required">*</span></label>
            <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
          </div>
          <div className="form-group-help">
            <label htmlFor="email">Your Email <span className="required">*</span></label>
            <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
          </div>
          <div className="form-group-help">
            <label htmlFor="issueType">What is your issue related to? <span className="required">*</span></label>
            <select id="issueType" className="form-control" required>
              <option value="">Please Select</option>
              <option value="waste-collection">Waste Collection</option>
              <option value="coins-rewards">Coins and Rewards</option>
              <option value="website-issues">Website Issues</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group-help">
            <label htmlFor="message">Your Message <span className="required">*</span></label>
            <textarea id="message" className="form-control" placeholder="Describe your issue or question" required></textarea>
          </div>
          <button type="submit" className="submit-button-help">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HelpAndSupport;
