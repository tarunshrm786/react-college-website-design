import React, { useState } from 'react';
import { Container, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material'; // Importing icons
import Header from '../Components/header';
import Footer from '../Components/footer';
import Sidebar from '../Components/Sidebar';


const students = [
    {
      id: 1,
      name: 'John Doe',
      passportPhoto1: '/certificate.jpg',
      passportPhoto2: '/certificate.jpg',
      passportPhoto3: '/certificate.jpg',
      marksheet10: '/certificate.jpg',
      marksheet12: '/certificate.jpg',
      otherMarksheet: '/certificate.jpg',
      aadharCard: '/certificate.jpg',
      rationCard: '/certificate.jpg',
      casteCertificate: '/certificate.jpg',
      status: null,
    },
    {
      id: 2,
      name: 'Jane Smith',
      passportPhoto1: '/certificate.jpg',
      passportPhoto2: '/certificate.jpg',
      passportPhoto3: '/certificate.jpg',
      marksheet10: '/certificate.jpg',
      marksheet12: '/certificate.jpg',
      otherMarksheet: '/certificate.jpg',
      aadharCard: '/certificate.jpg',
      rationCard: '/certificate.jpg',
      casteCertificate: '/certificate.jpg',
      status: null,
    },
    {
      id: 3,
      name: 'Michael Johnson',
      passportPhoto1: '/certificate.jpg',
      passportPhoto2: '/certificate.jpg',
      passportPhoto3: '/certificate.jpg',
      marksheet10: '/certificate.jpg',
      marksheet12: '/certificate.jpg',
      otherMarksheet: '/certificate.jpg',
      aadharCard: '/certificate.jpg',
      rationCard: '/certificate.jpg',
      casteCertificate: '/certificate.jpg',
      status: null,
    },
    {
      id: 4,
      name: 'Emily Davis',
      passportPhoto1: '/certificate.jpg',
      passportPhoto2: '/certificate.jpg',
      passportPhoto3: '/certificate.jpg',
      marksheet10: '/certificate.jpg',
      marksheet12: '/certificate.jpg',
      otherMarksheet: '/certificate.jpg',
      aadharCard: '/certificate.jpg',
      rationCard: '/certificate.jpg',
      casteCertificate: '/certificate.jpg',
      status: null,
    },
    {
      id: 5,
      name: 'William Brown',
      passportPhoto1: '/certificate.jpg',
      passportPhoto2: '/certificate.jpg',
      passportPhoto3: '/certificate.jpg',
      marksheet10: '/certificate.jpg',
      marksheet12: '/certificate.jpg',
      otherMarksheet: '/certificate.jpg',
      aadharCard: '/certificate.jpg',
      rationCard: '/certificate.jpg',
      casteCertificate: '/certificate.jpg',
      status: null,
    },
    {
      id: 6,
      name: 'Olivia Miller',
      passportPhoto1: '/certificate.jpg',
      passportPhoto2: '/certificate.jpg',
      passportPhoto3: '/certificate.jpg',
      marksheet10: '/certificate.jpg',
      marksheet12: '/certificate.jpg',
      otherMarksheet: '/certificate.jpg',
      aadharCard: '/certificate.jpg',
      rationCard: '/certificate.jpg',
      casteCertificate: '/certificate.jpg',
      status: null,
    },
    {
      id: 7,
      name: 'James Wilson',
      passportPhoto1: '/certificate.jpg',
      passportPhoto2: '/certificate.jpg',
      passportPhoto3: '/certificate.jpg',
      marksheet10: '/certificate.jpg',
      marksheet12: '/certificate.jpg',
      otherMarksheet: '/certificate.jpg',
      aadharCard: '/certificate.jpg',
      rationCard: '/certificate.jpg',
      casteCertificate: '/certificate.jpg',
      status: null,
    },
    {
      id: 8,
      name: 'Sophia Martinez',
      passportPhoto1: '/certificate.jpg',
      passportPhoto2: '/certificate.jpg',
      passportPhoto3: '/certificate.jpg',
      marksheet10: '/certificate.jpg',
      marksheet12: '/certificate.jpg',
      otherMarksheet: '/certificate.jpg',
      aadharCard: '/certificate.jpg',
      rationCard: '/certificate.jpg',
      casteCertificate: '/certificate.jpg',
      status: null,
    },
    {
      id: 9,
      name: 'Liam Garcia',
      passportPhoto1: '/certificate.jpg',
      passportPhoto2: '/certificate.jpg',
      passportPhoto3: '/certificate.jpg',
      marksheet10: '/certificate.jpg',
      marksheet12: '/certificate.jpg',
      otherMarksheet: '/certificate.jpg',
      aadharCard: '/certificate.jpg',
      rationCard: '/certificate.jpg',
      casteCertificate: '/certificate.jpg',
      status: null,
    },
    {
      id: 10,
      name: 'Isabella Hernandez',
      passportPhoto1: '/certificate.jpg',
      passportPhoto2: '/certificate.jpg',
      passportPhoto3: '/certificate.jpg',
      marksheet10: '/certificate.jpg',
      marksheet12: '/certificate.jpg',
      otherMarksheet: '/certificate.jpg',
      aadharCard: '/certificate.jpg',
      rationCard: '/certificate.jpg',
      casteCertificate: '/certificate.jpg',
      status: null,
    }
  ];
  

const AdminDocumentVerification = () => {
  const [studentData, setStudentData] = useState(students);
  const [openModal, setOpenModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle verification status (Verified or Not Verified)
  const handleVerify = (id, status) => {
    const updatedData = studentData.map((student) =>
      student.id === id ? { ...student, status: status } : student
    );
    setStudentData(updatedData);
  };

  // Function to handle opening the modal
  const handleOpenModal = (fileUrl) => {
    setSelectedFile(fileUrl);
    setOpenModal(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedFile(null);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
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
              Document Verification
            </Typography>

            {/* Table Container with horizontal scrolling for small screens */}
            <TableContainer
              component={Paper}
              sx={{
                width: {
                  xs: '340px', // Set a smaller width for mobile (small screens)
                  sm: '100%', // Full width for medium to large screens
                },
                overflowX: 'auto', // Enable horizontal scroll on smaller screens
              }}
            >
              <Table sx={{ minWidth: 2000 }} aria-label="document verification table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Passport Photo 1</TableCell>
                    <TableCell>Passport Photo 2</TableCell>
                    <TableCell>Passport Photo 3</TableCell>
                    <TableCell>10th Marksheet</TableCell>
                    <TableCell>12th Marksheet</TableCell>
                    <TableCell>Other Marksheet</TableCell>
                    <TableCell>Aadhar Card</TableCell>
                    <TableCell>Ration Card</TableCell>
                    <TableCell>Caste Certificate</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentData.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>
                        <Button onClick={() => handleOpenModal(student.passportPhoto1)}>View</Button>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => handleOpenModal(student.passportPhoto2)}>View</Button>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => handleOpenModal(student.passportPhoto3)}>View</Button>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => handleOpenModal(student.marksheet10)}>View</Button>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => handleOpenModal(student.marksheet12)}>View</Button>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => handleOpenModal(student.otherMarksheet)}>View</Button>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => handleOpenModal(student.aadharCard)}>View</Button>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => handleOpenModal(student.rationCard)}>View</Button>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => handleOpenModal(student.casteCertificate)}>View</Button>
                      </TableCell>
                      <TableCell>
                        {student.status === null ? (
                          <>
                            <Button
                              variant="contained"
                              color="success"
                              sx={{ mr: 1, mb: 1 }}
                              onClick={() => handleVerify(student.id, 'verified')}
                              startIcon={<CheckCircle />} // Added icon for "Verified"
                            >
                              
                            </Button>
                            <Button
                              variant="contained"
                              color="error"
                              onClick={() => handleVerify(student.id, 'not_verified')}
                              startIcon={<Cancel />} // Added icon for "Not Verified"
                            >
                              
                            </Button>
                          </>
                        ) : (
                          <Typography
                            variant="body1"
                            color={student.status === 'verified' ? 'green' : 'red'}
                          >
                            {student.status === 'verified' ? 'Verified' : 'Not Verified'}
                          </Typography>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Box>
      </Box>
      <Footer />

      {/* Modal for displaying file preview */}
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="md" fullWidth>
        <DialogTitle>Document Preview</DialogTitle>
        <DialogContent>
          {selectedFile && (
            <Box sx={{ textAlign: 'center' }}>
              {selectedFile.endsWith('.pdf') ? (
                <iframe
                  src={selectedFile}
                  title="PDF Preview"
                  width="100%"
                  height="500px"
                />
              ) : (
                <img
                  src={selectedFile}
                  alt="Document Preview"
                  style={{ width: '100%', height: 'auto' }}
                />
              )}
              <Button
                href={selectedFile}
                download
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Download
              </Button>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AdminDocumentVerification;
