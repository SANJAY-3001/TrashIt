const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // For creating tokens

// Function to handle user login
exports.login = (req, res) => {
    const { email, password } = req.body;
  
    // Query to get user by email
    db.query('SELECT * FROM user WHERE email = ?', [email], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(401).json({ message: 'Invalid email or password' });
  
      const user = results[0];
      
      // Compare the provided password with the hashed password in the database
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!isMatch) return res.status(401).json({ message: 'Invalid email or password' });
  
        // Generate a token
        const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
        
        // Return user details and token
        res.json({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email

          }
        });
      });
    });
  };
  

// Function to handle user registration
exports.register = (req, res) => {
  const { name, email, password } = req.body;

  // Hash the password before storing
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ error: err.message });

    // Query to insert a new user
    db.query('INSERT INTO user (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
};

// Function to get all users
exports.getAllUsers = (req, res) => {
    const query = 'SELECT id, name, email, created_at FROM user';
  
    db.query(query, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
  
      res.status(200).json(results);
    });
  };
                                                                  