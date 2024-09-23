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

// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, IconButton, Avatar, Box, Menu, MenuItem } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useTheme, useMediaQuery } from '@mui/material';

// const Header = ({ onDrawerToggle, onLogout }) => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   const [anchorEl, setAnchorEl] = useState(null); // State to control menu open/close

//   const handleAvatarClick = (event) => {
//     setAnchorEl(event.currentTarget); // Open the menu when avatar is clicked
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null); // Close the menu
//   };

//   const handleLogout = () => {
//     handleMenuClose();
//     if (onLogout) {
//       onLogout(); // Call the logout function when user clicks logout
//     }
//   };

//   return (
//     <AppBar position="fixed" sx={{ zIndex: 1300, backgroundColor: 'black' }}>
//       <Toolbar>
//         {isSmallScreen && (
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={onDrawerToggle}
//             sx={{ marginRight: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//         )}
//         <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
//           Admin Panel
//         </Typography>

//         <Box sx={{ marginLeft: 'auto' }}>
//           {/* Avatar with onClick to open menu */}
//           <Avatar
//             sx={{ bgcolor: 'gray', width: 40, height: 40, cursor: 'pointer' }}
//             onClick={handleAvatarClick}
//           >
//             A {/* Displaying the initial "A" */}
//           </Avatar>

//           {/* Menu with logout option */}
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'right',
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//           >
//             <MenuItem onClick={handleLogout}>Logout</MenuItem>
//           </Menu>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;
