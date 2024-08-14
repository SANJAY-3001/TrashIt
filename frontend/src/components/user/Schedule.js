import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { toast, ToastContainer } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS
import '../../assets/styles/Schedule.css';

const Schedule = () => {
    const { user } = useAuth(); // Access the user from the AuthContext
    const navigate = useNavigate(); // Initialize useNavigate

    const [form, setForm] = useState({
        user_id: user ? user.id : '',  // Set the user_id from the context
        name: '',
        address: '',
        date: '',
        timeFrom: '',
        timeTo: '',
        wasteType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/schedule', form);
            toast.success('Pickup scheduled successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                navigate('/'); // Navigate to home page after 1.5 seconds
            }, 1500);
        } catch (err) {
            toast.error('Error scheduling pickup. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.error('Error scheduling pickup:', err);
        }
    };

    return (
        <div className="schedule-container">
            <div className="hero-section">
                <img src={require('../../assets/images/sch2.jpg')} alt="Schedule Banner" className="hero-image" />
                <div className="hero-text-sch">
                    <h1>Schedule a Pickup</h1>
                </div>
            </div>
            <div className="content-sch">
                <div className="form-container-sch">
                    <h2>Schedule Your Pickup</h2>
                    <p className="form-intro">
                        Schedule a convenient time for us to pick up your waste. We appreciate your contribution towards a greener environment!
                    </p>
                    <hr />
                    <form className="schedule-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name <span className="required">*</span></label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                className="form-control-sch" 
                                value={form.name} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address <span className="required">*</span></label>
                            <textarea 
                                id="address" 
                                name="address" 
                                className="form-control-sch" 
                                value={form.address} 
                                onChange={handleChange} 
                                required 
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date <span className="required">*</span></label>
                            <input 
                                type="date" 
                                id="date" 
                                name="date" 
                                className="form-control-sch" 
                                value={form.date} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="timeFrom">Time From <span className="required">*</span></label>
                            <input 
                                type="time" 
                                id="timeFrom" 
                                name="timeFrom" 
                                className="form-control-sch" 
                                value={form.timeFrom} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="timeTo">Time To <span className="required">*</span></label>
                            <input 
                                type="time" 
                                id="timeTo" 
                                name="timeTo" 
                                className="form-control-sch" 
                                value={form.timeTo} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="wasteType">Type of Waste <span className="required">*</span></label>
                            <select 
                                id="wasteType" 
                                name="wasteType" 
                                className="form-control-sch" 
                                value={form.wasteType} 
                                onChange={handleChange} 
                                required
                            >
                                <option value="">Please Select</option>
                                <option value="Plastic">Plastic</option>
                                <option value="Bottles">Bottles</option>
                                <option value="Cover">Cover</option>
                                {/* Add more options if needed */}
                            </select>
                        </div>
                        <button type="submit" className="submit-button-sch">Schedule Pickup</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Schedule;
