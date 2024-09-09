import React, { useState } from 'react';
import '../header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
    const [isUGDropdownOpen, setIsUGDropdownOpen] = useState(false);
    const [isPGDropdownOpen, setIsPGDropdownOpen] = useState(false);
    const [isDiplomaDropdownOpen, setIsDiplomaDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMouseEnter = (setDropdownOpen) => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = (setDropdownOpen) => {
        setDropdownOpen(false);
    };

    return (
        <header className="main-header">
            <div className="logo">
                <img src="NAD-Logo.png" alt="Farrmi Logo" />
            </div>
            <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="/">Home</a></li>

                    <li
                        className={`dropdown ${isAboutDropdownOpen ? 'open' : ''}`}
                        onMouseEnter={() => handleMouseEnter(setIsAboutDropdownOpen)}
                        onMouseLeave={() => handleMouseLeave(setIsAboutDropdownOpen)}
                        style={{ position: 'relative' }}
                    >
                        <a href="#about" onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}>
                            About
                            <span className={`arrow ${isAboutDropdownOpen ? 'up' : 'down'}`}>▼</span>
                        </a>
                        {isAboutDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><a href="/aboutus">About Us</a></li>
                                <li><a href="/founding-members">Mentor</a></li>
                                <li><a href="/staff">Faculty</a></li>
                            </ul>
                        )}
                    </li>

                    <li
                        className={`dropdown ${isCoursesDropdownOpen ? 'open' : ''}`}
                        onMouseEnter={() => handleMouseEnter(setIsCoursesDropdownOpen)}
                        onMouseLeave={() => handleMouseLeave(setIsCoursesDropdownOpen)}
                        style={{ position: 'relative' }}
                    >
                        <a href="#courses" onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}>
                            Our Courses
                            <span className={`arrow ${isCoursesDropdownOpen ? 'up' : 'down'}`}>▼</span>
                        </a>
                        {isCoursesDropdownOpen && (
                            <ul className="dropdown-menu">
                                {/* UG Dropdown */}
                                <li
                                    className={`dropdown ${isUGDropdownOpen ? 'open' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(setIsUGDropdownOpen)}
                                    onMouseLeave={() => handleMouseLeave(setIsUGDropdownOpen)}
                                    style={{ position: 'relative' }}
                                >
                                    <a href="#ug" onClick={() => setIsUGDropdownOpen(!isUGDropdownOpen)}>
                                        UG
                                        <span className={`arrow ${isUGDropdownOpen ? 'up' : 'down'}`}>▼</span>
                                    </a>
                                    {isUGDropdownOpen && (
                                        <ul className="dropdown-menu nested-dropdown">
                                            <li><a href="/ba">B.A</a></li>
                                            <li><a href="/bcom">B.Com</a></li>
                                            <li><a href="/bsc">B.Sc</a></li>
                                            <li><a href="/bba">B.B.A</a></li>
                                            <li><a href="/bvoc-interior-design">B.Voc Interior Design</a></li>
                                            <li><a href="/bvoc-graphic-design">B.Voc Graphic Design</a></li>
                                            <li><a href="/bvoc-fashion-design">B.Voc Fashion Design</a></li>
                                        </ul>
                                    )}
                                </li>
                                {/* PG Dropdown */}
                                <li
                                    className={`dropdown ${isPGDropdownOpen ? 'open' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(setIsPGDropdownOpen)}
                                    onMouseLeave={() => handleMouseLeave(setIsPGDropdownOpen)}
                                    style={{ position: 'relative' }}
                                >
                                    <a href="#pg" onClick={() => setIsPGDropdownOpen(!isPGDropdownOpen)}>
                                        PG
                                        <span className={`arrow ${isPGDropdownOpen ? 'up' : 'down'}`}>▼</span>
                                    </a>
                                    {isPGDropdownOpen && (
                                        <ul className="dropdown-menu nested-dropdown">
                                            <li><a href="/ma">M.A</a></li>
                                            <li><a href="/mcom">M.Com</a></li>
                                            <li><a href="/msc">M.Sc</a></li>
                                            <li><a href="/mba">M.B.A</a></li>
                                            <li><a href="/mvoc-fashion-design">M.Voc Fashion Design</a></li>
                                            <li><a href="/mvoc-graphic-design">M.Voc Graphic Design</a></li>
                                            <li><a href="/mvoc-interior-design">M.Voc Interior Design</a></li>
                                        </ul>
                                    )}
                                </li>
                                {/* Diploma Dropdown */}
                                <li
                                    className={`dropdown ${isDiplomaDropdownOpen ? 'open' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(setIsDiplomaDropdownOpen)}
                                    onMouseLeave={() => handleMouseLeave(setIsDiplomaDropdownOpen)}
                                    style={{ position: 'relative' }}
                                >
                                    <a href="#diploma" onClick={() => setIsDiplomaDropdownOpen(!isDiplomaDropdownOpen)}>
                                        Diploma
                                        <span className={`arrow ${isDiplomaDropdownOpen ? 'up' : 'down'}`}>▼</span>
                                    </a>
                                    {isDiplomaDropdownOpen && (
                                        <ul className="dropdown-menu nested-dropdown">
                                            <li><a href="/web-designing">Architecture & interior design</a></li>
                                            <li><a href="/web-designing">Web development & design</a></li>
                                            <li><a href="/advance-web-designing">Fashion design</a></li>
                                            <li><a href="/master-diploma-web-designing">Graphic design</a></li>
                                            <li><a href="/professional-diploma-web-designing">Jewellery design</a></li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>

                    <li><a href="/placement">Placement</a></li>
                    <li><a href="/admission">Admission</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/contact-us">Contact us</a></li>
                    <li><a href="#student-login">Student Login</a></li>
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



