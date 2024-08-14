import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/styles/AgentDetails.css'; // Add your CSS file for styling

const AgentDetails = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/applications')
            .then(response => {
                setApplications(response.data);
            })
            .catch(error => {
                console.error('Error fetching applications:', error);
            });
    }, []);

    const handleApprove = (id) => {
        axios.put(`http://localhost:5000/api/approve/${id}`)
            .then(response => {
                // Update the state to reflect the change
                setApplications(applications.map(app => 
                    app.id === id ? { ...app, isapproved: 1 } : app
                ));
            })
            .catch(error => {
                console.error('Error approving application:', error);
            });
    };

    return (
        <div className="agent-details-container">
            <h1>Agent Applications</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                       
                        <th>Postal Code</th>
                        <th>Privacy Policy Accepted</th>
                        <th>Text Notifications</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((app) => (
                        <tr key={app.id}>
                            <td>{app.id}</td>
                            <td>{app.first_name}</td>
                            <td>{app.last_name}</td>
                            <td>{app.email}</td>
                            <td>{app.phone_number}</td>
                          
                            <td>{app.postal_code || '-'}</td>
                            <td>{app.privacy_policy_accepted ? 'Yes' : 'No'}</td>
                            <td>{app.text_notifications ? 'Yes' : 'No'}</td>
                            <td>{new Date(app.created_at).toLocaleDateString()}</td>
                            <td>{app.isapproved === 0 ? 'Pending' : 'Approved'}</td>
                            <td>
                                {app.isapproved === 0 ? (
                                    <button onClick={() => handleApprove(app.id)}>Approve</button>
                                ) : (
                                    <button disabled>Approved</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AgentDetails;
