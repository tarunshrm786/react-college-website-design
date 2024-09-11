// src/Components/ScrollIcon.js
// import React from 'react';
// import { FaUserGraduate } from 'react-icons/fa'; // You can use any icon
// import '../ScrollIcon.css'; // Import the CSS file

// const ScrollIcon = () => {
//   return (
//     <div className="fixed-icon">
//       <FaUserGraduate size={50} color="#000" /> {/* Icon size and color */}
//     </div>
//   );
// };

// export default ScrollIcon;


import React from 'react';
import { FaUserGraduate } from 'react-icons/fa'; // Icon import
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../ScrollIcon.css'; // Import the CSS file

const ScrollIcon = () => {
  return (
    <div className="fixed-icon">
      {/* Wrap the icon in a Link tag */}
      <Link to="/login">
        <FaUserGraduate size={50} color="#000" /> {/* Icon size and color */}
      </Link>
    </div>
  );
};

export default ScrollIcon;
