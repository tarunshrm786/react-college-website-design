// // Footer.js
// import React from 'react';
// //import '../css/adminFooter.css'; // Import CSS file for styling

// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-content">
//                 <p>&copy; 2024 Admin Panel. All rights reserved.</p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#333',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
    };

    const footerContentStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const paragraphStyle = {
        margin: 0,
        fontSize: '0.875rem',
    };

    return (
        <footer style={footerStyle}>
            <div style={footerContentStyle}>
                <p style={paragraphStyle}>
                    &copy; 2024 Admin Panel. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
