import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "../../assets/images/newlogo.png";
import { FaTachometerAlt, FaBox, FaClipboardList, FaChartLine, FaCog, FaSignOutAlt } from "react-icons/fa"; // React Icons
import '../../assets/styles/Sidebar.css';
import { useDarkMode } from "../context/DarkModeContext";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { darkMode } = useDarkMode(); // Get darkMode state from context
    const [closeMenu, setCloseMenu] = useState(false);
    const [activePath, setActivePath] = useState(location.pathname);

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
    };

    const handleNavigation = (path) => {
        navigate(`/admin${path}`);
        setActivePath(`/admin${path}`);
    };

    const handleLogoutClick = () => {
        navigate('/login');
    };

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    return (
        <div className={`sidebar ${closeMenu ? 'active' : ''} ${darkMode ? 'dark' : ''}`}>
            <div className={`logoContainer ${closeMenu ? 'active' : ''}`}>
                <img src={Icon} alt="Twistmart" className="logo" />
            </div>
            <div className={`burgerContainer ${closeMenu ? 'active' : ''}`}>
                <div className="burgerTrigger" onClick={handleCloseMenu}></div>
                <div className="burgerMenu"></div>
            </div>
            <div className={`profileContainer ${closeMenu ? 'active' : ''}`}>
                <div className={`profileContents ${closeMenu ? 'active' : ''}`}>
                    <p className="name">Hello, Trashit</p>
                    <p>trashit@gmail.com</p>
                </div>
            </div>
            <div className={`contentsContainer ${closeMenu ? 'active' : ''}`}>
                <ul>
                    <li
                        className={activePath === "/product_partner/dashboard" ? "active" : ""}
                        onClick={() => handleNavigation("/dashboard")}
                    >
                        <FaTachometerAlt size={24} />
                        <span>Dashboard</span>
                    </li>
                    <li
                        className={activePath === "/admin/user-details" ? "active" : ""}
                        onClick={() => handleNavigation("/user-details")}
                    >
                        <FaBox size={24} />
                        <span>User Details</span>
                    </li>
                    <li
                        className={activePath === "/product_partner/add-product" ? "active" : ""}
                        onClick={() => handleNavigation("/agent-details")}
                    >
                        <FaClipboardList size={24} />
                        <span>Agent Details</span>
                    </li>
                    <li
                        className={activePath === "/product_partner/waste-submission" ? "active" : ""}
                        onClick={() => handleNavigation("/waste-submission")}
                    >
                        <FaClipboardList size={24} />
                        <span>Waste submissions</span>
                    </li>
                    <li
                        className={activePath === "/product_partner/schedule-details" ? "active" : ""}
                        onClick={() => handleNavigation("/schedule-details")}
                    >
                        <FaClipboardList size={24} />
                        <span>Schedule Details</span>
                    </li>
                    <li
                        className={activePath === "/product_partner/review-details" ? "active" : ""}
                        onClick={() => handleNavigation("/review-details")}
                    >
                        <FaChartLine size={24} />
                        <span>Review Details</span>
                    </li>
                    <li
                        className={activePath === "/product_partner/settings" ? "active" : ""}
                        onClick={() => handleNavigation("/settings")}
                    >
                        <FaCog size={24} />
                        <span>Settings</span>
                    </li>
                    <li className="logout" onClick={handleLogoutClick}>
                        <FaSignOutAlt size={24} />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
