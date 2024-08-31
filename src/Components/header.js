// import React from 'react';
// import '../header.css';

// const Header = () => {
//     return (
//         <header className="main-header">
//             <div className="logo">
//                 <img src="NAD-Logo.png" alt="Farrmi Logo" />
//             </div>
//             <nav className="main-nav">
//                 <ul>
//                     <li><a href="#home">Home</a></li>
//                     <li><a href="#about">About</a></li>
//                     <li><a href="#courses">Courses</a></li>
//                     <li><a href="#affiliation">Affiliation</a></li>
//                     <li><a href="#facilities">Facilities</a></li>
//                     <li><a href="#enquiry">Enquiry</a></li>
//                     <li><a href="#contact">Contact</a></li>
//                     <li><a href="#activities">Activities</a></li>
//                     <li><a href="#ragging">Anti Ragging</a></li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Header;

import React, { useState } from 'react';
import '../header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="main-header">
            <div className="logo">
                <img src="NAD-Logo.png" alt="Farrmi Logo" />
            </div>
            <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
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
