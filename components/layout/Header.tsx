import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>MyApp</h1>
            </div>
            <nav className="nav">
                <ul className="nav-links">
                    <li>Rooms</li>
                    <li>Mansion</li>
                    <li>Countryside</li>
                    <li>More</li>
                </ul>
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
            <div className="auth-buttons">
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </header>
    );
};

export default Header;