// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../../assets/styles/Register.css';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle registration logic here
//     if (password === confirmPassword) {
//       navigate('/login');
//     } else {
//       alert('Passwords do not match');
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email:</label>
//           <input 
//             type="email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             required 
//           />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input 
//             type="password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             required 
//           />
//         </div>
//         <div className="form-group">
//           <label>Confirm Password:</label>
//           <input 
//             type="password" 
//             value={confirmPassword} 
//             onChange={(e) => setConfirmPassword(e.target.value)} 
//             required 
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//       <div className="register-links">
//         <Link to="/login">Already have an account?</Link>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/styles/Register.css';
import registerImage from '../../assets/images/login.jpg'; // Example image path

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    if (password === confirmPassword) {
      navigate('/login');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-form">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit">Register</button>
          </form>
          <div className="register-links">
            <Link to="/login">Already have an account?</Link>
          </div>
        </div>
        <div className="register-image">
          <img src={registerImage} alt="Register" />
        </div>
      </div>
    </div>
  );
};

export default Register;
