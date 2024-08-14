// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../assets/styles/Navbar.css';

// const Navbar = ({ isLoggedIn }) => {
//   const handleScroll = (event, id) => { 
//     event.preventDefault();
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="title">
//         TRASHIT
//       </div>
//       <div className="lightning-container">
//         <div className="lightning"></div>
//       </div>
//       <ul className="nav-items">
//         <li><Link to="/" className="navbar-link">Home</Link></li>
//         {isLoggedIn ? (
//           <>
//             <li><a href="#what-we-do" onClick={(e) => handleScroll(e, 'what-we-do')}>How It Works</a></li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/contactus">Contact Us</Link></li>
//           </>
//         ) : (
//           <>
//             <li className="dropdown">
//               <Link to="/my-coins">Coins</Link>
//               <div className="dropdown-content">
//                 <Link to="/mycoins">My Coins</Link>
//                 <Link to="/convertcoins">Convert Coins</Link>
//               </div>
//             </li>
//             <li><Link to="/shop">Shop</Link></li>
//             <li className="dropdown">
//               <Link to="/mysubmission">My Submission</Link>
//               <div className="dropdown-content">
//                 <Link to="/currentsubmission">Current Submission</Link>
//                 <Link to="/pastsubmission">Past Submission</Link>
//               </div>
//             </li>
//             <li className="dropdown">
//               <a href="#submit-waste-section" onClick={(e) => handleScroll(e, 'submit-waste-section')}>Submit Waste</a>
//               <div className="dropdown-content">
//                 <Link to="/submitwaste/resident">Resident</Link>
//                 <Link to="/submitwaste/commercial">Commercial</Link>
//                 <Link to="/submitwaste/ewaste">E-Waste</Link>
//               </div>
//             </li>
//             <li><Link to="/profile"><i className="fas fa-user"></i></Link></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../../assets/styles/Navbar.css';

// const Navbar = ({ isLoggedIn }) => {
//   const location = useLocation();

//   const handleScroll = (event, id) => { 
//     event.preventDefault();
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const isHomePage = location.pathname === '/';

//   return (
//     <nav className="navbar">
//       <div className="title">
//         TRASHIT
//       </div>
//       <div className="lightning-container">
//         <div className="lightning"></div>
//       </div>
//       <ul className="nav-items">
//         <li><Link to="/" className="navbar-link">Home</Link></li>
//         {isLoggedIn ? (
//           <>
//             <li><a href="#what-we-do" onClick={(e) => handleScroll(e, 'what-we-do')}>How It Works</a></li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/contactus">Contact Us</Link></li>
//           </>
//         ) : (
//           <>
//             <li><Link to="/my-coins">Coins</Link></li>
//             <li><Link to="/shop">Shop</Link></li>
//             <li><Link to="/mysubmission">My Submission</Link></li>
//             <li className="dropdown">
//               {isHomePage ? (
//                 <a href="#submit-waste-section" onClick={(e) => handleScroll(e, 'submit-waste-section')}>Submit Waste</a>
//               ) : (
//                 <>
//                   <span className="dropdown-button">Submit Waste</span>
//                   <div className="dropdown-content">
//                     <Link to="/resident">Resident</Link>
//                     <Link to="/commercial">Commercial</Link>
//                     <Link to="/ewaste">E-Waste</Link>
//                   </div>
//                 </>
//               )}
//             </li>
//             <li><Link to="/profile"><i className="fas fa-user"></i></Link></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
// components/common/Navbar.js
//logo navbar
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/styles/Navbar.css';
import { useAuth } from '../context/AuthContext';
import newlogo from '../../assets/images/newlogo.png';

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  const handleScroll = (event, id) => { 
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={newlogo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="lightning-container">
        <div className="lightning"></div>
      </div>
      <ul className="nav-items">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        {!isLoggedIn && (
          <>
            <li><Link to="#how-it-works" onClick={(e) => handleScroll(e, 'how-it-workss')}>How It Works</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </>
        )}
        {isLoggedIn && (
          <>
            <li><Link to="/my-coins">Coins</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/mysubmission">My Submission</Link></li>
            <li className="dropdown">
              {isHomePage ? (
                <Link to="#submit-waste-section" onClick={(e) => handleScroll(e, 'submit-waste-section')}>Submit Waste</Link>
              ) : (
                <>
                  <span className="dropdown-button">Submit Waste</span>
                  <div className="dropdown-content">
                    <Link to="/resident">Resident</Link>
                    <Link to="/commercial">Commercial</Link>
                    <Link to="/ewaste">E-Waste</Link>
                  </div>
                </>
              )}
            </li>
            <li><Link to="/profile"><i className="fas fa-user"></i></Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;