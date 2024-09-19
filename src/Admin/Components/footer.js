// // // Footer.js
// // import React from 'react';
// // //import '../css/adminFooter.css'; // Import CSS file for styling

// // const Footer = () => {
// //     return (
// //         <footer className="footer">
// //             <div className="footer-content">
// //                 <p>&copy; 2024 Admin Panel. All rights reserved.</p>
// //             </div>
// //         </footer>
// //     );
// // };

// // export default Footer;


// import React from 'react';

// const Footer = () => {
//     const footerStyle = {
//         backgroundColor: '#333',
//         color: 'white',
//         padding: '10px 20px',
//         textAlign: 'center',
//         position: 'fixed',
//         bottom: 0,
//         width: '100%',
//         boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
//         zIndex: 1000,
//     };

//     const footerContentStyle = {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//     };

//     const paragraphStyle = {
//         margin: 0,
//         fontSize: '0.875rem',
//     };

//     return (
//         <footer style={footerStyle}>
//             <div style={footerContentStyle}>
//                 <p style={paragraphStyle}>
//                     &copy; 2024 Admin Panel. All rights reserved.
//                 </p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

// src/components/Footer.js
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ padding: 2, backgroundColor: '#f1f1f1', width: '100%', mt: 'auto' }}>
    <Container>
      <Typography variant="body2" color="textSecondary" align="center">
        © 2024 Your Company. All rights reserved.
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 1 }}>
        Designed by Star Marketing
      </Typography>
    </Container>
  </Box>
);

export default Footer;
