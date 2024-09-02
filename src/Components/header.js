// import React, { useState } from 'react';
// import '../header.css';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <header className="main-header">
//             <div className="logo">
//                 <img src="NAD-Logo.png" alt="Farrmi Logo" />
//             </div>
//             <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
//                 <ul>
//                     <li><a href="#home">Home</a></li>
//                     <li><a href="#about">About</a></li>
//                     <li><a href="#courses">Courses</a></li>
//                     <li><a href="#affiliation">Affiliation</a></li>
//                     <li><a href="#facilities">Facilities</a></li>
//                     <li><a href="#enquiry">Enquiry</a></li>
//                     <li><a href="#contact">Contact</a></li>
//                     <li><a href="#activities">Activities</a></li>
//                 </ul>
//             </nav>
//             <div className="hamburger" onClick={toggleMenu}>
//                 <div className="line"></div>
//                 <div className="line"></div>
//                 <div className="line"></div>
//             </div>
//         </header>
//     );
// };

// export default Header;

import React, { useState } from 'react';
import '../header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (event) => {
        event.preventDefault(); // Prevent default anchor click behavior
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="main-header">
            <div className="logo">
                <img src="NAD-Logo.png" alt="Farrmi Logo" />
            </div>
            <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`} style={{ position: 'relative' }}>
                        <a href="#about" onClick={toggleDropdown}>
                            About
                            <span className={`arrow ${isDropdownOpen ? 'up' : 'down'}`}>▼</span>
                        </a>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><a href="/aboutus">About Us</a></li>
                                <li><a href="/founding-members">Founding Members</a></li>
                                <li><a href="/staff">Staff</a></li>
                            </ul>
                        )}
                    </li>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#affiliation">Affiliation</a></li>
                    <li><a href="#facilities">Facilities</a></li>
                    <li><a href="#enquiry">Enquiry</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#activities">Activities</a></li>
                </ul>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </header>
    );
};

export default Header;
