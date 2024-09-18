// Header.js
import React from 'react';
import '../css/adminHeader.css'; // Import CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>Admin Panel</h1>
                <nav>
                    <ul>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/users">Users</a></li>
                        <li><a href="/settings">Settings</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
