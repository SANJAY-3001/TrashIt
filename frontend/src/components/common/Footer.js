// import React from 'react';
// import '../../assets/styles/Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section about">
//           <h1 className="logo-text">Trash<span>It</span></h1>
//           <p>
//             Turning waste into wealth. Join us in making the world a cleaner place by recycling and managing waste efficiently.
//           </p>
//           <div className="contact">
//             <span><i className="fas fa-phone"></i> &nbsp; +1 234 567 890</span>
//             <span><i className="fas fa-envelope"></i> &nbsp; info@trashit.com</span>
//           </div>
//         </div>

//         <div className="footer-section links">
//           <h2>Quick Links</h2>
//           <br />
//           <ul>
//             <li><a href="#how-it-works">How It Works</a></li>
//             <li><a href="#about-us">About Us</a></li>
//             <li><a href="#contact-us">Contact Us</a></li>
//             <li><a href="#shop">Shop</a></li>
//           </ul>
//         </div>

//         <div className="footer-section social">
//           <h2>Social Media</h2>
//           <br />
//           <div className="social-links">
//             <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
//             <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
//             <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
//             <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         &copy; 2024 TrashIt | Designed by Your Name
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../assets/styles/Footer.css';

// const Footer = ({ isHomePage }) => {
//   return (
//     <footer className={`footer ${isHomePage ? 'home-footer' : ''}`}>
//       <div className="footer-content">
//         <div className="footer-section about">
//           <h3 className="footer-title">About TrashIt</h3>
//           <p>
//             TrashIt is dedicated to transforming waste management into a seamless and eco-friendly experience. Join us in our mission to create a cleaner and more sustainable world through innovative waste recycling solutions.
//           </p>
//         </div>
//         <div className="footer-section links">
//           <h3 className="footer-title">Quick Links</h3>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/services">Services</Link></li>
//             <li><Link to="/contact">Contact Us</Link></li>
//           </ul>
//         </div>
//         <div className="footer-section contact">
//           <h3 className="footer-title">Contact Us</h3>
//           <p>Email: support@trashit.com</p>
//           <p>Phone: +1 234 567 890</p>
//           <p>Address: 123 TrashIt Lane, Green City, GC 67890</p>
//         </div>
//         <div className="footer-section social">
//           <h3 className="footer-title">Follow Us</h3>
//           <ul className="social-icons">
//             <li>
//               <Link className="facebook" to="https://www.facebook.com/trashit">
//                 <i className="fa-brands fa-facebook"></i>
//               </Link>
//             </li>
//             <li>
//               <Link className="instagram" to="https://www.instagram.com/trashit">
//                 <i className="fa-brands fa-instagram"></i>
//               </Link>
//             </li>
//             <li>
//               <Link className="google" to="mailto:support@trashit.com">
//                 <i className="fa-brands fa-google"></i>
//               </Link>
//             </li>
//             <li>
//               <Link className="linkedin" to="https://www.linkedin.com/company/trashit">
//                 <i className="fa-brands fa-linkedin"></i>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} TrashIt. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Footer.css';

const Footer = forwardRef(({ isHomePage }, ref) => {
  return (
    <footer className={`footer ${isHomePage ? 'home-footer' : ''}`} ref={ref}>
      <div className="footer-content">
        <div className="footer-section about">
          <h3 className="footer-title">About TrashIt</h3>
          <p>
            TrashIt is dedicated to transforming waste management into a seamless and eco-friendly experience. Join us in our mission to create a cleaner and more sustainable world through innovative waste recycling solutions.
          </p>
        </div>
        <div className="footer-section links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3 className="footer-title">Contact Us</h3>
          <p>Email: support@trashit.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 TrashIt Lane, Green City, GC 67890</p>
        </div>
        <div className="footer-section social">
          <h3 className="footer-title">Follow Us</h3>
          <ul className="social-icons">
            <li>
              <Link className="facebook" to="https://www.facebook.com/trashit">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link className="instagram" to="https://www.instagram.com/trashit">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link className="google" to="mailto:support@trashit.com">
                <i className="fa-brands fa-google"></i>
              </Link>
            </li>
            <li>
              <Link className="linkedin" to="https://www.linkedin.com/company/trashit">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TrashIt. All rights reserved.</p>
      </div>
    </footer>
  );
});

export default Footer;
