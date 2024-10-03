import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, IconButton, TableContainer,
  Paper, TablePagination, InputBase, Snackbar, Alert
} from '@mui/material';
import { SaveAlt as PdfIcon, Delete as DeleteIcon } from '@mui/icons-material'; // Added Delete icon
import { GrDocumentExcel as ExcelIcon } from 'react-icons/gr';
import Header from './header';
import Footer from './footer';
import Sidebar from './Sidebar';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
//import '../css/adminEnquiry.css'; // Import your custom CSS file 

const apiURL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/enquiry'; // Replace with your actual endpoint

const EnquiryForm = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [enquiryData, setEnquiryData] = useState([]); // For displaying data
  const [originalData, setOriginalData] = useState([]); // For keeping the original data
  const [noDataFound, setNoDataFound] = useState(false); // For triggering the Snackbar
  const [deleteSuccess, setDeleteSuccess] = useState(false); // Snackbar for deletion

  useEffect(() => {
    const fetchData = () => {
      fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
          setEnquiryData(data);
          setOriginalData(data);
        })
        .catch((error) => {
          console.error('Error fetching API data:', error);
        });
    };

    fetchData();
  }, []);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredData = originalData.filter((user) =>
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.contactus.toString().includes(query) ||
      user.city.toLowerCase().includes(query)
    );

    setEnquiryData(filteredData);

    if (filteredData.length === 0) {
      setNoDataFound(true);
    } else {
      setNoDataFound(false);
    }
  };

  const deleteEnquiry = (id) => {
    fetch(`${apiURL}/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setEnquiryData(enquiryData.filter((user) => user._id !== id)); // Update data after deletion
          setDeleteSuccess(true); // Show delete success Snackbar
        } else {
          throw new Error('Failed to delete record');
        }
      })
      .catch((error) => {
        console.error('Error deleting record:', error);
      });
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ['Name', 'Email', 'Contact No', 'City'];
    const tableRows = enquiryData.map(user => [
      user.name,
      user.email,
      user.contactus,
      user.city,
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });

    doc.save('enquiry_form_data.pdf');
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(enquiryData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Enquiry Form Data');
    XLSX.writeFile(workbook, 'enquiry_form_data.xlsx');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />

        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            marginTop: '55px',
            mx: { xs: 2, sm: 4, md: 6 },
            overflowX: 'hidden',
            '@media (max-width: 600px)': {
              mx: 0,
            },
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Enquiry Form Management
          </Typography>

          <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={downloadPDF} color="primary" aria-label="Download as PDF">
              <PdfIcon />
            </IconButton>
            <IconButton onClick={downloadExcel} color="primary" aria-label="Download as Excel">
              <ExcelIcon size={24} />
            </IconButton>

            <InputBase
              placeholder="Search enquiries..."
              value={searchQuery}
              onChange={handleSearch}
              sx={{
                ml: 2,
                px: 1,
                py: 0.5,
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '300px',
              }}
            />
          </Box>

          <TableContainer
            component={Paper}
            sx={{
              overflowX: 'auto',
              borderRadius: 2,
              boxShadow: 2,
              marginBottom: 4,
              width: '100%',
              '@media (max-width: 600px)': {
                width: '100%',
                minWidth: 'auto',
              },
            }}
          >
            <Table
              sx={{
                minWidth: 650,
                width: '100%',
                border: '1px solid #ccc',
                '@media (max-width: 600px)': {
                  minWidth: '100%',
                },
              }}
              aria-label="enquiry form data"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Name</TableCell>
                  <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Email</TableCell>
                  <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Contact No</TableCell>
                  <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>City</TableCell>
                  <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Actions</TableCell> {/* Add Actions column */}
                </TableRow>
              </TableHead>

              <TableBody>
                {enquiryData.length > 0 ? (
                  enquiryData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ border: '1px solid #ccc' }}>{user.name}</TableCell>
                      <TableCell sx={{ border: '1px solid #ccc' }}>{user.email}</TableCell>
                      <TableCell sx={{ border: '1px solid #ccc' }}>{user.contactus}</TableCell>
                      <TableCell sx={{ border: '1px solid #ccc' }}>{user.city}</TableCell>
                      <TableCell sx={{ border: '1px solid #ccc' }}>
                        <IconButton
                          aria-label="delete"
                          color="error"
                          onClick={() => deleteEnquiry(user._id)} // Delete action
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} align="center" sx={{ border: '1px solid #ccc' }}>
                      No data available.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
       

            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={enquiryData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
        </Box>
      </Box>

      <Footer sx={{ marginBottom: 0 }} />

      {/* Snackbar for 'No data found' */}
      <Snackbar
        open={noDataFound}
        autoHideDuration={3000}
        onClose={() => setNoDataFound(false)}
      >
        <Alert onClose={() => setNoDataFound(false)} severity="warning" sx={{ width: '100%' }}>
          No data found
        </Alert>
      </Snackbar>

      {/* Snackbar for delete success */}
      <Snackbar
        open={deleteSuccess}
        autoHideDuration={3000}
        onClose={() => setDeleteSuccess(false)}
      >
        <Alert onClose={() => setDeleteSuccess(false)} severity="success" sx={{ width: '100%' }}>
          Record deleted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EnquiryForm;
