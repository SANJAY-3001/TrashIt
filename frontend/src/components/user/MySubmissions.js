import React, { useState, useEffect } from 'react';
import '../../assets/styles/MySubmissions.css';
import pa from '../../assets/images/papper.jpg';
import ew from '../../assets/images/ewate.jpg';
import { FaClock, FaBoxOpen } from 'react-icons/fa';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // Adjust the path as needed

const MySubmission = () => {
  const [currentSubmissions, setCurrentSubmissions] = useState([]);
  const [pastSubmissions, setPastSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user && user.id) {
      // Fetch current and past submissions
      const fetchSubmissions = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/submit-waste/user/${user.id}`);
          const now = new Date();
          const submissions = response.data;

          // Filter submissions based on istaken and created_at
          const current = submissions.filter(submission => submission.istaken === 0 );
          const past = submissions.filter(submission => submission.istaken === 1);

          setCurrentSubmissions(current);
          setPastSubmissions(past);
        } catch (error) {
          console.error('Error fetching submissions:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchSubmissions();
    }
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my-submission">
      <div className="section current-submissions">
        <h2>Current Submissions</h2>
        {currentSubmissions.length === 0 ? (
          <p>No current submissions.</p>
        ) : (
          <div className="submissions-grid">
            {currentSubmissions.map((submission) => (
              <div key={submission.id} className="submission-card">
                <img src={submission.category === 'Commercial' ? pa : ew} alt={submission.solution_type} className="submission-image" />
                <div className="submission-content">
                  <h3>{submission.solution_type || 'No Solution Type'}</h3>
                  <p>Address: {submission.address || 'No Address'}</p>
                  <div className="submission-details">
                    <div className="detail-item">
                      <FaBoxOpen />
                      <p>Category: {submission.category || 'N/A'}</p>
                    </div>
                    <div className="detail-item">
                      <FaClock />
                      <p>Created At: {new Date(submission.created_at).toLocaleDateString() || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="section past-submissions">
        <h2>Past Submissions</h2>
        {pastSubmissions.length === 0 ? (
          <p>No past submissions.</p>
        ) : (
          <div className="submissions-grid">
            {pastSubmissions.map((submission) => (
              <div key={submission.id} className="submission-card">
                <img src={submission.category === 'Commercial' ? pa : ew} alt={submission.solution_type} className="submission-image" />
                <div className="submission-content">
                  <h3>{submission.solution_type || 'No Solution Type'}</h3>
                  <p>Address: {submission.address || 'No Address'}</p>
                  <div className="submission-details">
                    <div className="detail-item">
                      <FaBoxOpen />
                      <p>Category: {submission.category || 'N/A'}</p>
                    </div>
                    <div className="detail-item">
                      <FaClock />
                      <p>Created At: {new Date(submission.created_at).toLocaleDateString() || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MySubmission;
