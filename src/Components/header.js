// import React, { useState } from 'react';
// import '../header.css';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
//     const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
//     const [isUGDropdownOpen, setIsUGDropdownOpen] = useState(false);
//     const [isPGDropdownOpen, setIsPGDropdownOpen] = useState(false);
//     const [isDiplomaDropdownOpen, setIsDiplomaDropdownOpen] = useState(false);

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
//                     <li><a href="/">Home</a></li>

                
//                      {/* About Menu */}
//                      <li
//                         className={`dropdown ${isAboutDropdownOpen ? 'open' : ''}`}
//                         style={{ position: 'relative' }}
//                     >
//                         <a href="#about" onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}>
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


//                     <li
//   className={`dropdown ${isCoursesDropdownOpen ? 'open' : ''}`}
//   style={{ position: 'relative' }}
// >
//   <a href="#courses" onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}>
//     Our Courses
//     <span className={`arrow ${isCoursesDropdownOpen ? 'up' : 'down'}`}>▼</span>
//   </a>
//   {isCoursesDropdownOpen && (
//     <ul className="dropdown-menu">
//       {/* UG Dropdown */}
//       <li
//         className={`dropdown ${isUGDropdownOpen ? 'open' : ''}`}
//         style={{ position: 'relative' }}
//       >
//         <a href="#ug" onClick={(e) => {
//             e.stopPropagation(); // Prevent closing the parent dropdown
//             setIsUGDropdownOpen(!isUGDropdownOpen);
//         }}>
//           UG
//           <span className={`arrow ${isUGDropdownOpen ? 'up' : 'down'}`}>▼</span>
//         </a>
//         {isUGDropdownOpen && (
//           <ul className="dropdown-menu nested-dropdown">
//             <li><a href="/ba">B.A</a></li>
//             <li><a href="/bcom">B.Com</a></li>
//             <li><a href="/bsc">B.Sc</a></li>
//             <li><a href="/bba">B.B.A</a></li>
//             <li><a href="/bvoc-interior-design">B.Voc Interior Design</a></li>
//             <li><a href="/bvoc-graphic-design">B.Voc Graphic Design</a></li>
//             <li><a href="/bvoc-fashion-design">B.Voc Fashion Design</a></li>
//           </ul>
//         )}
//       </li>
//       {/* PG Dropdown */}
//       <li
//         className={`dropdown ${isPGDropdownOpen ? 'open' : ''}`}
//         style={{ position: 'relative' }}
//       >
//         <a href="#pg" onClick={(e) => {
//             e.stopPropagation(); // Prevent closing the parent dropdown
//             setIsPGDropdownOpen(!isPGDropdownOpen);
//         }}>
//           PG
//           <span className={`arrow ${isPGDropdownOpen ? 'up' : 'down'}`}>▼</span>
//         </a>
//         {isPGDropdownOpen && (
//           <ul className="dropdown-menu nested-dropdown">
//             <li><a href="/ma">M.A</a></li>
//             <li><a href="/mcom">M.Com</a></li>
//             <li><a href="/msc">M.Sc</a></li>
//             <li><a href="/mba">M.B.A</a></li>
//             <li><a href="/mvoc-fashion-design">M.Voc Fashion Design</a></li>
//             <li><a href="/mvoc-graphic-design">M.Voc Graphic Design</a></li>
//             <li><a href="/mvoc-interior-design">M.Voc Interior Design</a></li>
//           </ul>
//         )}
//       </li>
//       {/* Diploma Dropdown */}
//       <li
//         className={`dropdown ${isDiplomaDropdownOpen ? 'open' : ''}`}
//         style={{ position: 'relative' }}
//       >
//         <a href="#diploma" onClick={(e) => {
//             e.stopPropagation(); // Prevent closing the parent dropdown
//             setIsDiplomaDropdownOpen(!isDiplomaDropdownOpen);
//         }}>
//           Diploma
//           <span className={`arrow ${isDiplomaDropdownOpen ? 'up' : 'down'}`}>▼</span>
//         </a>
//         {isDiplomaDropdownOpen && (
//           <ul className="dropdown-menu nested-dropdown">
//             <li><a href="/architecture-design">Architecture, Engineering & Construction</a></li>
//             <li><a href="/web-design">Web development & design</a></li>
//             <li><a href="/fashion-design">Fashion design</a></li>
//             <li><a href="/graphic-design">Graphic design</a></li>
//             <li><a href="/jewellery-design">Jewellery design</a></li>
//           </ul>
//         )}
//       </li>
//     </ul>
//   )}
// </li>


//                     <li><a href="/placement">Placement</a></li>
//                     <li><a href="/admission">Admission</a></li>
//                     <li><a href="/gallery">Gallery</a></li>
//                     <li><a href="/contact-us">Contact us</a></li>
//                     <li><a href="/login">Student Login</a></li>
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
import { Link } from 'react-router-dom';
import '../header.css';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
    const [isUGDropdownOpen, setIsUGDropdownOpen] = useState(false);
    const [isPGDropdownOpen, setIsPGDropdownOpen] = useState(false);
    const [isDiplomaDropdownOpen, setIsDiplomaDropdownOpen] = useState(false);

    // Function to close all dropdowns
    const closeAllDropdowns = () => {
        setIsAboutDropdownOpen(false);
        setIsCoursesDropdownOpen(false);
        setIsUGDropdownOpen(false);
        setIsPGDropdownOpen(false);
        setIsDiplomaDropdownOpen(false);
    };

    // Function to toggle the Courses dropdown and close others
    const handleCoursesClick = (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevents event from bubbling up and closing parent dropdowns
        closeAllDropdowns();
        setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
    };

    // Function to handle UG dropdown click
    const handleUGClick = (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevents event from bubbling up and closing parent dropdowns
        setIsUGDropdownOpen(!isUGDropdownOpen);
    };

    // Function to handle PG dropdown click
    const handlePGClick = (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevents event from bubbling up and closing parent dropdowns
        setIsPGDropdownOpen(!isPGDropdownOpen);
    };

    // Function to handle Diploma dropdown click
    const handleDiplomaClick = (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevents event from bubbling up and closing parent dropdowns
        setIsDiplomaDropdownOpen(!isDiplomaDropdownOpen);
    };

    return (
        <header className="main-header">
            {/* <div className="logo">
                <img src="NAD-Logo.png" alt="Farrmi Logo" />
            </div> */}
            <div className="logo">
  <Link to="/">
    <img src="NAD-Logo.png" alt="Farrmi Logo" />
  </Link>
</div>

            <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    {/* <li><a href="/">Home</a></li> */}
                    <li><Link to="/">Home</Link></li>

                    {/* About Menu */}
                    <li
                        className={`dropdown ${isAboutDropdownOpen ? 'open' : ''}`}
                        style={{ position: 'relative' }}
                    >
                        <a href="#about" onClick={() => {
                            closeAllDropdowns();
                            setIsAboutDropdownOpen(!isAboutDropdownOpen);
                        }}>
                            About
                            <span className={`arrow ${isAboutDropdownOpen ? 'up' : 'down'}`}>▼</span>
                        </a>
                        {isAboutDropdownOpen && (
                            <ul className="dropdown-menu">
                                {/* <li><a href="/aboutus">About Us</a></li>
                                <li><a href="/founding-members">Mentor</a></li>
                                <li><a href="/staff">Faculty</a></li> */}

<li><Link to="/aboutus">About Us</Link></li>
<li><Link to="/founding-members">Mentor</Link></li>
<li><Link to="/staff">Our Team</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* Courses Menu */}
                    <li
                        className={`dropdown ${isCoursesDropdownOpen ? 'open' : ''}`}
                        style={{ position: 'relative' }}
                    >
                        <a href="#courses" onClick={handleCoursesClick}>
                            Our Courses
                            <span className={`arrow ${isCoursesDropdownOpen ? 'up' : 'down'}`}>▼</span>
                        </a>
                        {isCoursesDropdownOpen && (
                            <ul className="dropdown-menu">
                                {/* UG Dropdown */}
                                <li
                                    className={`dropdown ${isUGDropdownOpen ? 'open' : ''}`}
                                    style={{ position: 'relative' }}
                                >
                                    <a href="#ug" onClick={handleUGClick}>
                                        UG
                                        <span className={`arrow ${isUGDropdownOpen ? 'up' : 'down'}`}>▼</span>
                                    </a>
                                    {isUGDropdownOpen && (
                                        <ul className="dropdown-menu nested-dropdown">
                                            {/* <li><a href="/ba">B.A</a></li>
                                            <li><a href="/bcom">B.Com</a></li>
                                            <li><a href="/bsc">B.Sc</a></li>
                                            <li><a href="/bba">B.B.A</a></li>
                                            <li><a href="/bvoc-interior-design">B.Voc Interior Design</a></li>
                                            <li><a href="/bvoc-graphic-design">B.Voc Graphic Design</a></li>
                                            <li><a href="/bvoc-fashion-design">B.Voc Fashion Design</a></li> */}
                                            <li><Link to="/ba">B.A</Link></li>
<li><Link to="/bcom">B.Com</Link></li>
<li><Link to="/bsc">B.Sc</Link></li>
<li><Link to="/bba">B.B.A</Link></li>
<li><Link to="/bvoc-interior-design">B.Voc Interior Design</Link></li>
<li><Link to="/bvoc-graphic-design">B.Voc Graphic Design</Link></li>
<li><Link to="/bvoc-fashion-design">B.Voc Fashion Design</Link></li>
                                        </ul>
                                    )}
                                </li>
                                {/* PG Dropdown */}
                                <li
                                    className={`dropdown ${isPGDropdownOpen ? 'open' : ''}`}
                                    style={{ position: 'relative' }}
                                >
                                    <a href="#pg" onClick={handlePGClick}>
                                        PG
                                        <span className={`arrow ${isPGDropdownOpen ? 'up' : 'down'}`}>▼</span>
                                    </a>
                                    {isPGDropdownOpen && (
                                        <ul className="dropdown-menu nested-dropdown">
                                            {/* <li><a href="/ma">M.A</a></li>
                                            <li><a href="/mcom">M.Com</a></li>
                                            <li><a href="/msc">M.Sc</a></li>
                                            <li><a href="/mba">M.B.A</a></li>
                                            <li><a href="/mvoc-fashion-design">M.Voc Fashion Design</a></li>
                                            <li><a href="/mvoc-graphic-design">M.Voc Graphic Design</a></li>
                                            <li><a href="/mvoc-interior-design">M.Voc Interior Design</a></li> */}
                                            <li><Link to="/ma">M.A</Link></li>
<li><Link to="/mcom">M.Com</Link></li>
<li><Link to="/msc">M.Sc</Link></li>
<li><Link to="/mba">M.B.A</Link></li>
<li><Link to="/mvoc-fashion-design">M.Voc Fashion Design</Link></li>
<li><Link to="/mvoc-graphic-design">M.Voc Graphic Design</Link></li>
<li><Link to="/mvoc-interior-design">M.Voc Interior Design</Link></li>
                                        </ul>
                                    )}
                                </li>
                                {/* Diploma Dropdown */}
                                <li
                                    className={`dropdown ${isDiplomaDropdownOpen ? 'open' : ''}`}
                                    style={{ position: 'relative' }}
                                >
                                    <a href="#diploma" onClick={handleDiplomaClick}>
                                        Diploma
                                        <span className={`arrow ${isDiplomaDropdownOpen ? 'up' : 'down'}`}>▼</span>
                                    </a>
                                    {isDiplomaDropdownOpen && (
                                        <ul className="dropdown-menu nested-dropdown">
                                            {/* <li><a href="/architecture-design">Architecture, Engineering & Construction</a></li>
                                            <li><a href="/web-design">Web development & design</a></li>
                                            <li><a href="/fashion-design">Fashion design</a></li>
                                            <li><a href="/graphic-design">Graphic design</a></li>
                                            <li><a href="/jewellery-design">Jewellery design</a></li> */}
                                            <li><Link to="/architecture-design">Architecture, Engineering & Construction</Link></li>
<li><Link to="/web-design">Web Development & Design</Link></li>
<li><Link to="/fashion-design">Fashion Design</Link></li>
<li><Link to="/graphic-design">Graphic Design</Link></li>
<li><Link to="/jewellery-design">Jewellery Design</Link></li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* <li><a href="/placement">Placement</a></li>
                    <li><a href="/admission">Admission</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/contact-us">Contact us</a></li>
                    <li><a href="/login">Student Login</a></li> */}
                    <li><Link to="/placement">Placement</Link></li>
<li><Link to="/admission">Admission</Link></li>
<li><Link to="/gallery">Gallery</Link></li>
<li><Link to="/contact-us">Contact us</Link></li>
<li><Link to="/career">Career</Link></li>
{/* <li><Link to="/login">Student Login</Link></li> */}

                </ul>
            </nav>
            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </header>
    );
};

export default Header;
