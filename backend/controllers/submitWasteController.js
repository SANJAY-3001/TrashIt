const db = require('../config/db');

exports.createSubmitWaste = (req, res) => {
    const { userId, category, solutionType, address, firstName, lastName, email, phone } = req.body;
  
    if (!userId || !category || !solutionType || !address || !firstName || !lastName || !email || !phone) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    const query = `
      INSERT INTO submit_waste (user_id, category, solution_type, address, first_name, last_name, email, phone, istaken)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0)  -- Passing 0 directly for istaken
    `;
  
    const values = [userId, category, solutionType, address, firstName, lastName, email, phone];
  
    db.query(query, values, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Database error' });
      }
      res.status(201).json({ message: 'Submit waste record created successfully', data: results.insertId });
    });
  };
  

exports.getAllWasteSubmissions = (req, res) => {
  const query = 'SELECT * FROM submit_waste';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching waste submissions:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    
    res.status(200).json(results);
  });
};

// New method to get waste submissions by user ID
exports.getSubmitWasteByUserId = (req, res) => {
  const userId = req.params.userId;

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  const query = 'SELECT * FROM submit_waste WHERE user_id = ?';

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching waste submissions:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'No submissions found for this user' });
    }

    res.status(200).json(results);
  });
};


// Update the istaken status by submission ID
exports.updateSubmitStatusById = (req, res) => {
    const { id } = req.params;
    const { istaken } = req.body;
  
    if (istaken === undefined) {
      return res.status(400).json({ message: 'istaken status is required' });
    }
  
    const query = 'UPDATE submit_waste SET istaken = ? WHERE id = ?';
  
    db.query(query, [istaken, id], (err, results) => {
      if (err) {
        console.error('Error updating waste submission status:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }
  
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Submission not found' });
      }
  
      res.status(200).json({ message: 'Waste submission status updated successfully' });
    });
  };