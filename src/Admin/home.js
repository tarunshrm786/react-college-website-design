// import React from 'react';
// import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Divider, CssBaseline, Box, Container, useMediaQuery, useTheme } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import SettingsIcon from '@mui/icons-material/Settings';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';

// function AdminPanel() {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//   const [open, setOpen] = React.useState(false);

//   // Toggle drawer open/close state
//   const handleDrawerToggle = () => {
//     setOpen(!open);
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
//       <CssBaseline />
     
//       <AppBar position="fixed" sx={{ zIndex: 1300, backgroundColor: 'black' }}>
//   <Toolbar>
//     {isSmallScreen && (
//       <IconButton
//         edge="start"
//         color="inherit"
//         aria-label="menu"
//         onClick={handleDrawerToggle}
//         sx={{ marginRight: 2 }}
//       >
//         <MenuIcon sx={{ color: 'white' }} />
//       </IconButton>
//     )}
//     <Typography variant="h6" sx={{ color: 'white' }}>
//       Admin Panel
//     </Typography>
//   </Toolbar>
// </AppBar>

//       <Box sx={{ display: 'flex', flex: 1 }}>
//         <Drawer
//           variant={isSmallScreen ? "temporary" : "permanent"}
//           anchor="left"
//           open={open}
//           onClose={handleDrawerToggle}
//           sx={{
//             width: 240,
//             flexShrink: 0,
//             '& .MuiDrawer-paper': {
//               width: 240,
//               boxShadow: 3,
//             },
//           }}
//         >
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: 1, marginTop: 8 }}>
//             {isSmallScreen && (
//               <IconButton onClick={handleDrawerToggle}>
//                 <MenuIcon />
//               </IconButton>
//             )}
//           </Box>
//           <Divider />
//           <List>
//             {['Dashboard', 'Settings', 'Logout'].map((text, index) => (
//               <ListItem button key={text}>
//                 <IconButton>
//                   {index === 0 && <DashboardIcon />}
//                   {index === 1 && <SettingsIcon />}
//                   {index === 2 && <ExitToAppIcon />}
//                 </IconButton>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>
//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             padding: 3,
//             marginTop: 8,
//             marginLeft: isSmallScreen ? 0 : 0, // Adjust margin-left based on screen size
//             transition: 'margin-left 0.3s', // Smooth transition for margin-left change
//           }}
//         >
//           <Container>
//             <Typography paragraph>
//               Welcome to the Admin Panel. Here you can manage all the aspects of your application.
//             </Typography>
//             <Typography paragraph>
//               This is a sample admin panel layout using Material UI. You can add more components and functionality as needed.
//             </Typography>
//           </Container>
//         </Box>
//       </Box>
//         <Box component="footer" sx={{ padding: 2, backgroundColor: '#f1f1f1', position: 'fixed', bottom: 0, width: '100%' }}>
//         <Container>
//           <Typography variant="body2" color="textSecondary" align="center">
//             © 2024 The NAD. All rights reserved.
//           </Typography>
//           <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 1 }}>
//             Designed by Star Marketing
//           </Typography>
//         </Container>
//       </Box>
//     </Box>
//   );
// }

// export default AdminPanel;

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Divider, CssBaseline, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function AdminPanel() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);

  // Toggle drawer open/close state
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: 1300, backgroundColor: 'black' }}>
        <Toolbar>
          {isSmallScreen && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
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
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Drawer
          variant={isSmallScreen ? "temporary" : "permanent"}
          anchor="left"
          open={open}
          onClose={handleDrawerToggle}
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxShadow: 3,
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: 1 }}>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            <ListItem button onClick={() => console.log('Dashboard clicked')}>
              <DashboardIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={() => console.log('Settings clicked')}>
              <SettingsIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button onClick={() => console.log('Logout clicked')}>
              <ExitToAppIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: 3,
            marginTop: 8,
            marginLeft: isSmallScreen ? 0 : 240, // Adjust margin-left based on screen size
            transition: 'margin-left 0.3s', // Smooth transition for margin-left change
          }}
        >
          <Container>
            <Typography paragraph>
              Welcome to the Admin Panel. Here you can manage all the aspects of your application.
            </Typography>
            <Typography paragraph>
              This is a sample admin panel layout using Material UI. You can add more components and functionality as needed.
            </Typography>
          </Container>
          <Box component="footer" sx={{ padding: 2, backgroundColor: '#f1f1f1', position: 'fixed', bottom: 0, width: '100%' }}>
            <Container>
              <Typography variant="body2" color="textSecondary" align="center">
                © 2024 Your Company. All rights reserved.
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 1 }}>
                Designed by Star Marketing
              </Typography>
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminPanel;
