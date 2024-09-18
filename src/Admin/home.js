import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link for navigation

const AdminHome = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: 4,
        padding: 4,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Admin Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              padding: 2,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6">Manage Users</Typography>
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              component={Link}
              to="/manage-users" // Update with your route
            >
              Go to Users
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              padding: 2,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6">Manage Posts</Typography>
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              component={Link}
              to="/manage-posts" // Update with your route
            >
              Go to Posts
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              padding: 2,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6">Analytics</Typography>
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              component={Link}
              to="/analytics" // Update with your route
            >
              View Analytics
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminHome;
