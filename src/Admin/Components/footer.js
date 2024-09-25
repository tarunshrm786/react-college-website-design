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
