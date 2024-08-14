// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../../assets/styles/Login.css';
// import loginImage from '../../assets/images/login.jpg'; 

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     navigate('/');
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <div className="login-image">
//           <img src={loginImage} alt="Login" />
//         </div>
//         <div className="login-form">
//           <h2>Login</h2>
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
//             <button type="submit">Login</button>
//           </form>
//           <div className="login-links">
//             <Link to="/forgotpassword">Forgot Password?</Link>
//             <Link to="/register">Create an Account</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React from 'react';
// import '../../assets/styles/Login.css';

// const Login = () => {
//   return (
//     <div className="login-container">
//       <div className="login-left">
//         <h2 className="login-heading">Login</h2>
//         <form>
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name="email" placeholder="hello@reallygreatsite.com" />

//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" name="password" placeholder="********" />

//           <button type="submit" className="login-button">Login</button>
//         </form>
//       </div>
//       <div className="login-right">
//         <div className="logo">TrashIt</div>
//         <h1>Welcome Back</h1>
//         <p className="already-registered">New here? <a href="/register">Create an account</a></p>
//         <p className="description">
//           Join us in making a difference! TrashIt helps you manage waste efficiently and promote a cleaner environment.
//         </p>
//         <button className="learn-more-button">Learn More</button>
//       </div>
//     </div>
//   );
// };

// export default Login;
// components/auth/Login.js

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext'
// import '../../assets/styles/Login.css';

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform your authentication logic here.
//     // This is a placeholder for actual login logic.
//     if (email === 'user@example.com' && password === 'password') {
//       login();
//       navigate('/');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-left">
//         <h2 className="login-heading">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="hello@reallygreatsite.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="********"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button type="submit" className="login-button">Login</button>
//         </form>
//       </div>
//       <div className="login-right">
//         <div className="logo">TrashIt</div>
//         <h1>Welcome Back</h1>
//         <p className="already-registered">New here? <a href="/register">Create an account</a></p>
//         <p className="description">
//           Join us in making a difference! TrashIt helps you manage waste efficiently and promote a cleaner environment.
//         </p>
//         <button className="learn-more-button">Learn More</button>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate,Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import '../../assets/styles/Login.css';

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (email === 'admin@gmail.com' && password === 'admin@123') {
//       login();
//       navigate('/admin');
//       return;
//     }
//     try {
//       const response = await fetch('http://localhost:8080/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         const user = await response.json();
//         login(user); 
//         navigate('/');
//       } else {
//         const errorText = await response.text();
//         console.error('Login error:', errorText);
//         alert('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//       alert('Login failed. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-left">
//         <h2 className="login-heading">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="hello@reallygreatsite.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="********"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit" className="login-button">Login</button>
//         </form>
//       </div>
//       <div className="login-right">
//         <div className="logo">TrashIt</div>
//         <h1>Welcome Back</h1>
//         <p className="already-registered">New here? <Link to="/register">Create an account</Link></p>
//         <p className="description">
//           Join us in making a difference! TrashIt helps you manage waste efficiently and promote a cleaner environment.
//         </p>
//         <button className="learn-more-button">Learn More</button>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import '../../assets/styles/Login.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token); 
      login(user); 
      navigate('/'); 
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="hello@reallygreatsite.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button-new">Login</button>
        </form>
      </div>
      <div className="login-right">
        <div className="logo">TrashIt</div>
        <h1>Welcome Back</h1>
        <p className="already-registered">New here? <Link to="/register">Create an account</Link></p>
        <p className="description-log">
          Join us in making a difference! TrashIt helps you manage waste efficiently and promote a cleaner environment.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>
    </div>
  );
};

export default Login;
