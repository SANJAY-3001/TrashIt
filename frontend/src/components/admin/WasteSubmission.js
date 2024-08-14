import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook from react-router-dom
import axios from 'axios';
import '../../assets/styles/WasteSubmission.css';

const WasteSubmission = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/submit-waste');
        setSubmissions(response.data);
      } catch (error) {
        setError('Error fetching waste submissions');
        console.error('Error fetching waste submissions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const handleTakeWaste = (id, userId) => {
    navigate(`/admin/waste-submission/take-waste/${id}/${userId}`); // Redirect to the new page with submission id and user id
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="waste-submission-container">
      <h2>Waste Submissions</h2>
      {submissions.length === 0 ? (
        <p>No submissions found.</p>
      ) : (
        <table className="waste-submission-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Category</th>
              <th>Solution Type</th>
              <th>Address</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map(submission => (
              <tr key={submission.id}>
                <td>{submission.id}</td>
                <td>{submission.user_id}</td>
                <td>{submission.category}</td>
                <td>{submission.solution_type}</td>
                <td>{submission.address}</td>
                <td>{submission.first_name}</td>
                <td>{submission.last_name}</td>
                <td>{submission.email}</td>
                <td>{submission.phone}</td>
                <td>{new Date(submission.created_at).toLocaleString()}</td>
                <td>
                  {submission.istaken === 0 ? (
                    <button onClick={() => handleTakeWaste(submission.id, submission.user_id)}>Take Waste</button>
                  ) : (
                    <button disabled>Already Taken</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WasteSubmission;
