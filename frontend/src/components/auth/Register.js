// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../../assets/styles/Register.css';
// import registerImage from '../../assets/images/login.jpg'; // Example image path

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
//     <div className="register-page">
//       <div className="register-container">
//         <div className="register-form">
//           <h2>Register</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>Email:</label>
//               <input 
//                 type="email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//                 required 
//               />
//             </div>
//             <div className="form-group">
//               <label>Password:</label>
//               <input 
//                 type="password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 required 
//               />
//             </div>
//             <div className="form-group">
//               <label>Confirm Password:</label>
//               <input 
//                 type="password" 
//                 value={confirmPassword} 
//                 onChange={(e) => setConfirmPassword(e.target.value)} 
//                 required 
//               />
//             </div>
//             <button type="submit">Register</button>
//           </form>
//           <div className="register-links">
//             <Link to="/login">Already have an account?</Link>
//           </div>
//         </div>
//         <div className="register-image">
//           <img src={registerImage} alt="Register" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { useAuth } from '../context/AuthContext'; // Import useAuth
// import '../../assets/styles/Register.css';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const { register } = useAuth(); // Get the register function from context
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, email, password } = formData;
    
//     if (!name || !email || !password) {
//       toast.error('Please fill in all fields.');
//       return;
//     }

//     try {
//       await register(name, email, password); // Call register function
//       toast.success('Registration successful!');
//       navigate('/login');
//     } catch (error) {
//       toast.error('Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="register-left">
//         <div className="logo-register">TrashIt</div>
//         <h1>Create New Account</h1>
//         <p className="already-registered">Already Registered? <a href="/login">Login</a></p>
//         <p className="description">Join us in making a difference! TrashIt helps you manage waste efficiently and promote a cleaner environment.</p>
//         <button className="learn-more-button">Learn More</button>
//       </div>
//       <div className="register-right">
//         <h2 className="register-login-heading">Register</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Francois Mercer"
//           />

//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="hello@reallygreatsite.com"
//           />

//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="********"
//           />

//           <button type="submit" className="sign-up-button">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// // export default Register;
// import React, { useState } from 'react';
// import { useNavigate,Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import '../../assets/styles/Register.css';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, email, password } = formData;
    
//     if (!name || !email || !password) {
//       toast.error('Please fill in all fields.');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:8080/api/users/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       if (response.ok) {
//         toast.success('Registration successful!');
//         navigate('/login');
//       } else {
//         toast.error('Registration failed. Please try again.');
//       }
//     } catch (error) {
//       toast.error('Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="register-left">
//         <div className="logo-register">TrashIt</div>
//         <h1>Create New Account</h1>
//         <p className="already-registered">Already Registered? <Link to="/login">Login</Link></p>
//         <p className="description">Join us in making a difference! TrashIt helps you manage waste efficiently and promote a cleaner environment.</p>
//         <button className="learn-more-button">Learn More</button>
//       </div>
//       <div className="register-right">
//         <h2 className="register-login-heading">Register</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Francois Mercer"
//           />

//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="hello@reallygreatsite.com"
//           />

//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="********"
//           />

//           <button type="submit" className="sign-up-button">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;



// export default Register;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../../assets/styles/Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', formData);
      navigate('/login'); // Redirect to login page after successful registration
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <div className="logo-register">TrashIt</div>
        <h1>Create New Account</h1>
        <p className="already-registered">Already Registered? <Link to="/login">Login</Link></p>
        <p className="description-reg">Join us in making a difference! TrashIt helps you manage waste efficiently and promote a cleaner environment.</p>
        <button className="learn-more-button">Learn More</button>
      </div>
      <div className="register-right">
        <h2 className="register-login-heading">Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Francois Mercer"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="hello@reallygreatsite.com"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="********"
          />

          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="sign-up-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
