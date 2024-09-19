// // Header.js
// import React from 'react';
// import '../css/adminHeader.css'; // Import CSS file for styling

// const Header = () => {
//     return (
//         <header className="header">
//             <div className="header-content">
//                 <h1>Admin Panel</h1>
//                 {/* <nav>
//                     <ul>
//                         <li><a href="/dashboard">Dashboard</a></li>
//                         <li><a href="/users">Users</a></li>
//                         <li><a href="/settings">Settings</a></li>
//                     </ul>
//                 </nav> */}
//             </div>
//         </header>
//     );
// };

// export default Header;

// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme, useMediaQuery } from '@mui/material';

const Header = ({ onDrawerToggle }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="fixed" sx={{ zIndex: 1300, backgroundColor: 'black' }}>
      <Toolbar>
        {isSmallScreen && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onDrawerToggle}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" sx={{ color: 'white' }}>
          Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
