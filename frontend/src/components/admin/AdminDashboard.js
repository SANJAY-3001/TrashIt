// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import UserDetails from "./UserDetails";
// import AgentDetails from "./AgentDetail";
// import "../../assets/styles/AdminDashboard.css";
// import WasteSubmission from "./WasteSubmission";
// import ReviewDetails from "./ReviewDetails";
// import Dashboard from "./Dashboard";
// import Settings from "./Settings";

// const AdminDashboard = () => {
//     return (
//         <div className="admin-dashboard">
//             <Sidebar />
//             <div className="content-admin">
//                 <Routes>
//                     <Route path="/dashboard" element={<Dashboard/>} />
//                     <Route path="/user-details" element={<UserDetails />} />
//                     <Route path="/agent-details" element={<AgentDetails />} />
//                     <Route path="/waste-submission" element={<WasteSubmission/>} />
//                     <Route path="/review-details" element={<ReviewDetails/>} />
//                     <Route path="/manage-orders" element={<h1>Manage Orders</h1>} />
//                     <Route path="/settings" element={<Settings/>} />
//                 </Routes>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import UserDetails from "./UserDetails";
import AgentDetails from "./AgentDetails";
import WasteSubmission from "./WasteSubmission";
import ReviewDetails from "./ReviewDetails";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import { DarkModeProvider, useDarkMode } from "../context/DarkModeContext";
import "../../assets/styles/AdminDashboard.css";
import ScheduledDetails from "./ScheduledDetails";
import TakeWaste from "./TakeWaste";

const AdminDashboardContent = () => {
    const { darkMode } = useDarkMode();

    return (
        <div className={`admin-dashboard ${darkMode ? 'dark-mode' : ''}`}>
            <Sidebar />
            <div className="content-admin fadeInUp">
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/user-details" element={<UserDetails />} />
                    <Route path="/agent-details" element={<AgentDetails />} />
                    <Route path="/waste-submission" element={<WasteSubmission />} />
                    <Route path="/review-details" element={<ReviewDetails />} />
                    <Route path="/schedule-details" element={<ScheduledDetails />} />
                    <Route path="/waste-submission/take-waste/:id/:userId" element={<TakeWaste />} />
                    <Route path="/manage-orders" element={<h1>Manage Orders</h1>} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
};

const AdminDashboard = () => {
    return (
        <DarkModeProvider>
            <AdminDashboardContent />
        </DarkModeProvider>
    );
};

export default AdminDashboard;
