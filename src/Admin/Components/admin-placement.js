import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from './header';
import Footer from './footer';
import Sidebar from './Sidebar';

const AdminPlacement = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />

        <Box sx={{ flexGrow: 1, p: 4, marginTop: '55px' }}>

          <Typography variant="h4" sx={{ mb: 2 }}>
            Admin Panel - Placement Management
          </Typography>

        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default AdminPlacement;
