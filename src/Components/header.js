// import React, { useState } from 'react';
// import '../header.css';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
//     const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     // const toggleDropdown = (event) => {
//     //     event.preventDefault();
//     //     setIsDropdownOpen(!isDropdownOpen);
//     // };
  
//     const toggleAboutDropdown = () => {
//       setIsAboutDropdownOpen(!isAboutDropdownOpen);
//       setIsCoursesDropdownOpen(false); // Close the other dropdown
//     };
  
//     const toggleCoursesDropdown = () => {
//       setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
//       setIsAboutDropdownOpen(false); // Close the other dropdown
//     };

//     return (
//         <header className="main-header">
//             <div className="logo">
//                 <img src="NAD-Logo.png" alt="Farrmi Logo" />
//             </div>
//             <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
//                 <ul>
//                     <li><a href="/">Home</a></li>
                   
//                     <li className={`dropdown ${isAboutDropdownOpen ? 'open' : ''}`} style={{ position: 'relative' }}>
//         <a href="#about" onClick={toggleAboutDropdown}>
//           About
//           <span className={`arrow ${isAboutDropdownOpen ? 'up' : 'down'}`}>▼</span>
//         </a>
//         {isAboutDropdownOpen && (
//           <ul className="dropdown-menu">
//             <li><a href="/aboutus">About Us</a></li>
//             <li><a href="/founding-members">Mentor</a></li>
//             <li><a href="/staff">Faculty</a></li>
//           </ul>
//         )}
//       </li>
//       <li className={`dropdown ${isCoursesDropdownOpen ? 'open' : ''}`} style={{ position: 'relative' }}>
//         <a href="#courses" onClick={toggleCoursesDropdown}>
//           Our Courses
//           <span className={`arrow ${isCoursesDropdownOpen ? 'up' : 'down'}`}>▼</span>
//         </a>
//         {isCoursesDropdownOpen && (
//           <ul className="dropdown-menu">
//             <li><a href="/ug">UG</a></li>
//             <li><a href="/pg">PG</a></li>
//             <li><a href="/diploma">Diploma</a></li>
//           </ul>
//         )}
//       </li>

//                     <li><a href="#affiliation">Placement</a></li>
//                     <li><a href="#facilities">Admission</a></li>
//                     <li><a href="#enquiry">Gallery</a></li>
//                     <li><a href="#contact">Contact us</a></li>
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



// import React, { useState } from 'react';
// import '../header.css';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
//     const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
//     const [isUGDropdownOpen, setIsUGDropdownOpen] = useState(false); // State for UG nested dropdown

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const toggleAboutDropdown = () => {
//         setIsAboutDropdownOpen(!isAboutDropdownOpen);
//         setIsCoursesDropdownOpen(false); // Close the other dropdown
//         setIsUGDropdownOpen(false); // Close nested dropdown if open
//     };

//     const toggleCoursesDropdown = () => {
//         setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
//         setIsAboutDropdownOpen(false); // Close the other dropdown
//         setIsUGDropdownOpen(false); // Close nested dropdown if open
//     };

//     const toggleUGDropdown = () => {
//         setIsUGDropdownOpen(!isUGDropdownOpen);
//     };

//     return (
//         <header className="main-header">
//             <div className="logo">
//                 <img src="NAD-Logo.png" alt="Farrmi Logo" />
//             </div>
//             <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
//                 <ul>
//                     <li><a href="/">Home</a></li>
                   
//                     <li className={`dropdown ${isAboutDropdownOpen ? 'open' : ''}`} style={{ position: 'relative' }}>
//                         <a href="#about" onClick={toggleAboutDropdown}>
//                             About
//                             <span className={`arrow ${isAboutDropdownOpen ? 'up' : 'down'}`}>▼</span>
//                         </a>
//                         {isAboutDropdownOpen && (
//                             <ul className="dropdown-menu">
//                                 <li><a href="/aboutus">About Us</a></li>
//                                 <li><a href="/founding-members">Mentor</a></li>
//                                 <li><a href="/staff">Faculty</a></li>
//                             </ul>
//                         )}
//                     </li>

//                     <li className={`dropdown ${isCoursesDropdownOpen ? 'open' : ''}`} style={{ position: 'relative' }}>
//                         <a href="#courses" onClick={toggleCoursesDropdown}>
//                             Our Courses
//                             <span className={`arrow ${isCoursesDropdownOpen ? 'up' : 'down'}`}>▼</span>
//                         </a>
//                         {isCoursesDropdownOpen && (
//                             <ul className="dropdown-menu">
//                                 <li className={`dropdown ${isUGDropdownOpen ? 'open' : ''}`} style={{ position: 'relative' }}>
//                                     <a href="#ug" onClick={toggleUGDropdown}>
//                                         UG
//                                         <span className={`arrow ${isUGDropdownOpen ? 'up' : 'down'}`}>▼</span>
//                                     </a>
//                                     {isUGDropdownOpen && (
//                                         <ul className="dropdown-menu nested-dropdown">
//                                             <li><a href="/ba">B.A</a></li>
//                                             <li><a href="/bcom">B.Com</a></li>
//                                             <li><a href="/bsc">B.Sc</a></li>
//                                             <li><a href="/bba">B.B.A</a></li>
//                                             <li><a href="/bvoc-interior-design">B.Voc Interior Design</a></li>
//                                             <li><a href="/bvoc-graphic-design">B.Voc Graphic Design</a></li>
//                                             <li><a href="/bvoc-fashion-design">B.Voc Fashion Design</a></li>
//                                         </ul>
//                                     )}
//                                 </li>
//                                 <li><a href="/pg">PG</a></li>
//                                 <li><a href="/diploma">Diploma</a></li>
//                             </ul>
//                         )}
//                     </li>

//                     <li><a href="#affiliation">Placement</a></li>
//                     <li><a href="#facilities">Admission</a></li>
//                     <li><a href="#enquiry">Gallery</a></li>
//                     <li><a href="#contact">Contact us</a></li>
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
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
    const [isUGDropdownOpen, setIsUGDropdownOpen] = useState(false);
    const [isPGDropdownOpen, setIsPGDropdownOpen] = useState(false);
    const [isDiplomaDropdownOpen, setIsDiplomaDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleAboutDropdown = () => {
        setIsAboutDropdownOpen(!isAboutDropdownOpen);
        setIsCoursesDropdownOpen(false);
        setIsUGDropdownOpen(false);
        setIsPGDropdownOpen(false);
        setIsDiplomaDropdownOpen(false);
    };

    const toggleCoursesDropdown = () => {
        setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
        setIsAboutDropdownOpen(false);
        setIsUGDropdownOpen(false);
        setIsPGDropdownOpen(false);
        setIsDiplomaDropdownOpen(false);
    };

    const toggleUGDropdown = () => {
        setIsUGDropdownOpen(!isUGDropdownOpen);
        setIsPGDropdownOpen(false);
        setIsDiplomaDropdownOpen(false);
    };

    const togglePGDropdown = () => {
        setIsPGDropdownOpen(!isPGDropdownOpen);
        setIsUGDropdownOpen(false);
        setIsDiplomaDropdownOpen(false);
    };

    const toggleDiplomaDropdown = () => {
        setIsDiplomaDropdownOpen(!isDiplomaDropdownOpen);
        setIsUGDropdownOpen(false);
        setIsPGDropdownOpen(false);
    };

    return (
        <header className="main-header">
            <div className="logo">
                <img src="NAD-Logo.png" alt="Farrmi Logo" />
            </div>
            <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                   
                    <li className={`dropdown ${isAboutDropdownOpen ? 'open' : ''}`} style={{ position: 'relative' }}>
                        <a href="#about" onClick={toggleAboutDropdown}>
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

                    <li className={`dropdown ${isCoursesDropdownOpen ? 'open' : ''}`} style={{ position: 'relative' }}>
                        <a href="#courses" onClick={toggleCoursesDropdown}>
                            Our Courses
                            <span className={`arrow ${isCoursesDropdownOpen ? 'up' : 'down'}`}>▼</span>
                        </a>
                        {isCoursesDropdownOpen && (
                            <ul className="dropdown-menu">
                                {/* UG Dropdown */}
                                <li className={`dropdown ${isUGDropdownOpen ? 'open' : ''}`} style={{ position: 'relative' }}>
                                    <a href="#ug" onClick={toggleUGDropdown}>
                                        UG
                                        <span className={`arrow ${isUGDropdownOpen ? 'up' : 'down'}`}>▼</span>
                                    </a>
                                    {isUGDropdownOpen && (
                                        <ul className="dropdown-menu nested-dropdown">
                                            <li><a href="/ba">B.A</a></li>
                                            <li><a href="/bcom">B.Com</a></li>
                                            <li><a href="/bsc">B.Sc</a></li>
                                            <li><a href="/bba">B.B.A</a></li>
                                            <li><a href="#bvoc-interior-design">B.Voc Interior Design</a></li>
                                            <li><a href="#bvoc-graphic-design">B.Voc Graphic Design</a></li>
                                            <li><a href="#bvoc-fashion-design">B.Voc Fashion Design</a></li>
                                        </ul>
                                    )}
                                </li>
                                {/* PG Dropdown */}
                                <li className={`dropdown ${isPGDropdownOpen ? 'open' : ''}`} style={{ position: 'relative' }}>
                                    <a href="#pg" onClick={togglePGDropdown}>
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
                                <li className={`dropdown ${isDiplomaDropdownOpen ? 'open' : ''}`} style={{ position: 'relative' }}>
                                    <a href="#diploma" onClick={toggleDiplomaDropdown}>
                                        Diploma
                                        <span className={`arrow ${isDiplomaDropdownOpen ? 'up' : 'down'}`}>▼</span>
                                    </a>
                                    {isDiplomaDropdownOpen && (
                                        <ul className="dropdown-menu nested-dropdown">
                                            <li><a href="/web-designing">Web Designing</a></li>
                                            <li><a href="/advance-web-designing">Advance Web Designing</a></li>
                                            <li><a href="/master-diploma-web-designing">Master Diploma in Web Designing</a></li>
                                            <li><a href="/professional-diploma-web-designing">Professional Diploma in Web Designing</a></li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>

                    <li><a href="#affiliation">Placement</a></li>
                    <li><a href="#facilities">Admission</a></li>
                    <li><a href="#enquiry">Gallery</a></li>
                    <li><a href="#contact">Contact us</a></li>
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
