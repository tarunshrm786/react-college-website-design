import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box, Pagination } from '@mui/material';

// Example JSON data with unique images for each student
const students = [
  { id: 1, name: "John Doe", image: "/img1.jpg", package: "6.2 LPA", companyLogo: "/img1.jpg" },
  { id: 2, name: "Jane Smith", image: "/img2.jpg", package: "7 LPA", companyLogo: "/img2.jpg" },
  { id: 3, name: "Alice Johnson", image: "/img3.jpg", package: "8 LPA", companyLogo: "/img6.jpg" },
  { id: 4, name: "Bob Brown", image: "/img4.jpg", package: "5 LPA", companyLogo: "/img4.jpg" },
  { id: 5, name: "Charlie Davis", image: "/img1.jpg", package: "6 LPA", companyLogo: "/img1.jpg" },
  { id: 6, name: "David Wilson", image: "/img6.jpg", package: "7 LPA", companyLogo: "/img2.jpg" },
  { id: 7, name: "Emma White", image: "/img7.jpg", package: "8 LPA", companyLogo: "/img4.jpg" },
  { id: 8, name: "Frank Harris", image: "/img1.jpg", package: "5 LPA", companyLogo: "/img6.jpg" },
  { id: 9, name: "Grace Martin", image: "/img2.jpg", package: "9 LPA", companyLogo: "/img1.jpg" },
  { id: 10, name: "Hannah Brown", image: "/img3.jpg", package: "4.5 LPA", companyLogo: "/img1.jpg" },
  { id: 11, name: "Isaac Lee", image: "/img4.jpg", package: "9 LPA", companyLogo: "/img1.jpg" },
  { id: 12, name: "Jack Robinson", image: "/img1.jpg", package: "5 LPA", companyLogo: "/img1.jpg" },
  { id: 13, name: "Katherine Green", image: "/img6.jpg", package: "2.5 LPA", companyLogo: "/img1.jpg" },
  { id: 14, name: "Liam Harris", image: "/img7.jpg", package: "11 LPA", companyLogo: "/img1.jpg" },
  { id: 15, name: "Mia Young", image: "/img1.jpg", package: "19 LPA", companyLogo: "/img2.jpg" },
  { id: 16, name: "Noah White", image: "/img2.jpg", package: "4 LPA", companyLogo: "/img1.jpg" },
  { id: 17, name: "Olivia King", image: "/img3.jpg", package: "7 LPA", companyLogo: "/img1.jpg" },
  { id: 18, name: "Paul Scott", image: "/img4.jpg", package: "10 LPA", companyLogo: "/img6.jpg" },
  { id: 19, name: "Quinn Adams", image: "/img2.jpg", package: "16 LPA", companyLogo: "/img1.jpg" },
  { id: 20, name: "Rachel Clark", image: "/img6.jpg", package: "5 LPA", companyLogo: "/img2.jpg" },
  { id: 21, name: "Sam Wilson", image: "/img7.jpg", package: "6 LPA", companyLogo: "/img4.jpg" },
  { id: 22, name: "Tina Evans", image: "/img2.jpg", package: "7 LPA", companyLogo: "/img1.jpg" },
  { id: 23, name: "Ulysses Morris", image: "/img1.jpg", package: "8 LPA", companyLogo: "/img1.jpg" },
  { id: 24, name: "Vera Miller", image: "/img3.jpg", package: "5 LPA", companyLogo: "/img2.jpg" },
  { id: 25, name: "William Anderson", image: "/img4.jpg", package: "6 LPA", companyLogo: "/img1.jpg" },
  { id: 26, name: "Xena Rogers", image: "/img1.jpg", package: "7 LPA", companyLogo: "/img1.jpg" },
  { id: 27, name: "Yara Martinez", image: "/img6.jpg", package: "8 LPA", companyLogo: "/img6.jpg" },
  { id: 28, name: "Zachary Taylor", image: "/img7.jpg", package: "5 LPA", companyLogo: "/img1.jpg" },
  { id: 29, name: "Alice Johnson", image: "/img1.jpg", package: "6 LPA", companyLogo: "/img2.jpg" },
  { id: 30, name: "Bob Brown", image: "/img2.jpg", package: "7 LPA", companyLogo: "/img4.jpg" },
];

const itemsPerPage = 9; // Number of items per page (3 rows * 3 columns)

const Placement = () => {
  const [page, setPage] = useState(1);

  // Handler for page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Calculate the starting index and slice the array for current page
  const startIndex = (page - 1) * itemsPerPage;
  const currentStudents = students.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Box sx={{ marginLeft: '40px', marginRight: '40px' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{marginTop: '20px', marginBottom: '20px', fontFamily: 'Montserrat, sans-serif'}}>
      Welcome to Our Placement Records! 
      </Typography>

      <Typography variant="h7"  gutterBottom sx={{ lineHeight: '1.5', marginTop: '40px', textAlign: 'justify', fontFamily: 'Montserrat, sans-serif'}}>
      Explore the impressive placement achievements of our students who have excelled in securing top positions with renowned companies. Our academy is dedicated to providing quality education and career opportunities, ensuring our graduates are well-prepared for the professional world. Discover how our students are making their mark in various industries.
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          // Remove border-related properties
          borderCollapse: 'collapse',
          padding: 2, // Padding added for spacing
        }}
      >
        {currentStudents.map((student) => (
          <Grid item xs={12} sm={6} md={4} key={student.id}>
            <Card
              sx={{
                border: '2px solid #ddd',
                borderRadius: '8px',
                margin: 2,
                display: 'flex',
                flexDirection: 'row',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: '#ffeef0', // Light pink background color
                  transform: 'scale(1.05)', // Slightly enlarge the card
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: '100px',
                  height: '100px',
                }}
                image={student.image}
                title={student.name}
              />
              <CardContent
                sx={{
                  flex: 1,
                  padding: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  {student.name}
                </Typography>
                <Box mt={2}>
                  <img src={student.companyLogo} alt="Company Logo" width="80" />
                </Box>
                <Typography variant="body2" color="textSecondary">
                  with package
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 1,
                  }}
                >
                  {student.package}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(students.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        sx={{ display: 'flex', justifyContent: 'center', mt: 3, marginBottom: '20px' }}
      />
    </Box>
  );
};

export default Placement;
