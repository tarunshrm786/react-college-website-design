// import React, { useState } from 'react';
// import Header from '../Components/header';
// import Footer from '../Components/footer';
// import Sidebar from '../Components/Sidebar';
// import { Container, Box, Typography, TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

// const FeesStructure = () => {
//   const [course, setCourse] = useState('');
//   const [fees, setFees] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`Course: ${course}, Fees: ${fees}`);
//     alert(`Fees for ${course} has been submitted successfully.`);
//   };

//   return (
//     <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
//       {/* Header and Sidebar */}
//       <Header />
//       <Box sx={{ display: 'flex', flexGrow: 1 }}>
//         <Sidebar />
//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             p: 3,
//             mt: 8, // For header space
//           }}
//         >
//           <Container>
//             <Typography variant="h4" gutterBottom>
//               Set Fees for Courses
//             </Typography>
//             <form onSubmit={handleSubmit}>
//               <FormControl fullWidth sx={{ mb: 2 }}>
//                 <InputLabel id="course-select-label">Select Course</InputLabel>
//                 <Select
//                   labelId="course-select-label"
//                   id="course"
//                   value={course}
//                   label="Select Course"
//                   onChange={(e) => setCourse(e.target.value)}
//                   required
//                 >
//                   <MenuItem value="">
//                     <em>None</em>
//                   </MenuItem>
//                   <MenuItem value="Computer Science">Computer Science</MenuItem>
//                   <MenuItem value="Electrical Engineering">Electrical Engineering</MenuItem>
//                   <MenuItem value="Mechanical Engineering">Mechanical Engineering</MenuItem>
//                   {/* Add more course options as needed */}
//                 </Select>
//               </FormControl>

//               <TextField
//                 fullWidth
//                 id="fees"
//                 label="Fees"
//                 type="number"
//                 value={fees}
//                 onChange={(e) => setFees(e.target.value)}
//                 placeholder="Enter Fees Amount"
//                 required
//                 sx={{ mb: 2 }}
//               />

//               <Button
//                 variant="contained"
//                 type="submit"
//                 sx={{
//                   backgroundColor: 'black',
//                   color: 'white',
//                   '&:hover': {
//                     backgroundColor: '#333', // Darker black on hover
//                   },
//                 }}
//               >
//                 Submit Fees
//               </Button>
//             </form>
//           </Container>
//         </Box>
//       </Box>

//       {/* Footer */}
//       <Footer />
//     </Box>
//   );
// };

// export default FeesStructure;

import React, { useState } from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
import Sidebar from '../Components/Sidebar';
import { Container, Box, Typography, TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const FeesStructure = () => {
  const [category, setCategory] = useState('');
  const [branch, setBranch] = useState('');
  const [fees, setFees] = useState('');

  const courseOptions = {
    UG: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering'],
    PG: ['Data Science', 'Robotics', 'Civil Engineering'],
    Diploma: ['Automobile Engineering', 'Interior Design', 'Fashion Technology'],
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setBranch(''); // Reset the branch when the category changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Category: ${category}, Branch: ${branch}, Fees: ${fees}`);
    alert(`Fees for ${branch} in ${category} category has been submitted successfully.`);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      {/* Header and Sidebar */}
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mt: 8, // For header space
          }}
        >
          <Container>
            <Typography variant="h4" gutterBottom>
              Set Fees for Courses
            </Typography>
            <form onSubmit={handleSubmit}>
              {/* Course Category */}
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="category-select-label">Select Course Category</InputLabel>
                <Select
                  labelId="category-select-label"
                  id="category"
                  value={category}
                  label="Select Course Category"
                  onChange={handleCategoryChange}
                  required
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="UG">UG</MenuItem>
                  <MenuItem value="PG">PG</MenuItem>
                  <MenuItem value="Diploma">Diploma</MenuItem>
                </Select>
              </FormControl>

              {/* Course Branch */}
              {category && (
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="branch-select-label">Select Course Branch</InputLabel>
                  <Select
                    labelId="branch-select-label"
                    id="branch"
                    value={branch}
                    label="Select Course Branch"
                    onChange={(e) => setBranch(e.target.value)}
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {courseOptions[category].map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}

              {/* Fees */}
              {branch && (
                <TextField
                  fullWidth
                  id="fees"
                  label="Fees"
                  type="number"
                  value={fees}
                  onChange={(e) => setFees(e.target.value)}
                  placeholder="Enter Fees Amount"
                  required
                  sx={{ mb: 2 }}
                />
              )}

              {/* Submit Button */}
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#333', // Darker black on hover
                  },
                }}
              >
                Submit Fees
              </Button>
            </form>
          </Container>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default FeesStructure;
