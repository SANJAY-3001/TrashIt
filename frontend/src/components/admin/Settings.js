import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faPalette } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/Settings.css';
import { useDarkMode } from '../context/DarkModeContext';

const Settings = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [themeColor, setThemeColor] = useState('#4caf50'); // Default theme color

    const handleColorChange = (event) => {
        setThemeColor(event.target.value);
        document.documentElement.style.setProperty('--theme-color', event.target.value);
    };

    return (
        <div className={`settings-page ${darkMode ? 'dark-mode' : ''}`}>
            <header className="settings-header">
                <h1>Settings</h1>
                <p>Customize your preferences.</p>
            </header>

            <div className="settings-options">
                <div className="option-card">
                    <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="option-icon" />
                    <h3>Dark Mode</h3>
                    <p>Toggle between light and dark themes.</p>
                    <button onClick={toggleDarkMode} className="toggle-button">
                        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    </button>
                </div>

                <div className="option-card">
                    <FontAwesomeIcon icon={faPalette} className="option-icon" />
                    <h3>Theme Color</h3>
                    <p>Customize the primary color of your dashboard.</p>
                    <input
                        type="color"
                        value={themeColor}
                        onChange={handleColorChange}
                        className="color-picker"
                    />
                </div>
            </div>
        </div>
    );
};

export default Settings;
