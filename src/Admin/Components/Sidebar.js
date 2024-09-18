// Components/Sidebar.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, useTheme, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon, People as PeopleIcon, PostAdd as PostAddIcon, Analytics as AnalyticsIcon, Info as InfoIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleSidebar = () => setOpen(!open);

    const menuItems = [
        { text: 'Home', icon: <HomeIcon />, path: '/' },
        { text: 'Manage Users', icon: <PeopleIcon />, path: '/manage-users' },
        { text: 'Manage Posts', icon: <PostAddIcon />, path: '/manage-posts' },
        { text: 'Analytics', icon: <AnalyticsIcon />, path: '/analytics' },
        { text: 'About', icon: <InfoIcon />, path: '/about' },
    ];

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="menu"
                onClick={toggleSidebar}
                sx={{ display: isMobile ? 'block' : 'none', position: 'fixed', top: 16, left: 16, zIndex: 1201 }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                anchor="left"
                open={isMobile ? open : true}
                onClose={isMobile ? toggleSidebar : undefined}
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Divider />
                <List>
                    {menuItems.map((item) => (
                        <ListItem button component={Link} to={item.path} key={item.text}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Sidebar;
