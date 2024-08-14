import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/styles/ScheduledDetails.css'; // Ensure you have the correct CSS file path

const ScheduledDetails = () => {
    const [schedules, setSchedules] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/schedules');
                setSchedules(response.data.schedules);
            } catch (err) {
                setError('Error fetching schedules.');
                console.error(err);
            }
        };

        fetchSchedules();
    }, []);

    return (
        <div className="scheduled-details-container">
            <h1>All Scheduled Pickups</h1>
            {error && <p className="error-message">{error}</p>}
            {schedules.length === 0 ? (
                <p>No schedules available.</p>
            ) : (
                <table className="schedules-table">
                    <thead>
                        <tr>
                            <th>Schedule ID</th>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Date</th>
                            <th>Time From</th>
                            <th>Time To</th>
                            <th>Waste Type</th>
                            <th>User Name</th>
                            <th>User Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.map(schedule => (
                            <tr key={schedule.schedule_id}>
                                <td>{schedule.schedule_id}</td>
                                <td>{schedule.user_id}</td>
                                <td>{schedule.name}</td>
                                <td>{schedule.address}</td>
                                <td>{new Date(schedule.date).toLocaleDateString()}</td>
                                <td>{new Date(`1970-01-01T${schedule.time_from}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                                <td>{new Date(`1970-01-01T${schedule.time_to}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                                <td>{schedule.waste_type}</td>
                                <td>{schedule.user_name}</td>
                                <td>{schedule.user_email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ScheduledDetails;
