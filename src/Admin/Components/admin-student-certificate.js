import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography, Box } from '@mui/material';
import Header from './header';
import Footer from './footer';
import Sidebar from './Sidebar';
import '../css/StudentCertificate.css';

const StudentCertificate = () => {
  const [formData, setFormData] = useState({
    certificateNo: '',
    enrollmentNo: '',
    recipientName: '',
    courseName: '',
    duration: '',
    date: ''
  });

  const [isCertificateVisible, setCertificateVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCertificateVisible(true);
  };

  return (
    <Box display="flex">
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Container className="container" sx={{ marginTop: '85px', marginBottom: '300px' }}>
          <div className="form-container">
            <Typography variant="h4" gutterBottom>
              Assign Certificate Details to Student
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {/* Form fields */}
                <Grid item xs={6}>
                  <TextField
                    label="Certificate No."
                    name="certificateNo"
                    fullWidth
                    value={formData.certificateNo}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Enrollment No."
                    name="enrollmentNo"
                    fullWidth
                    value={formData.enrollmentNo}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Recipient Name"
                    name="recipientName"
                    fullWidth
                    value={formData.recipientName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Course Name"
                    name="courseName"
                    fullWidth
                    value={formData.courseName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Duration"
                    name="duration"
                    fullWidth
                    value={formData.duration}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Date"
                    name="date"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              <Button variant="contained" type="submit" style={{ marginTop: '20px', backgroundColor: 'black', marginBottom: '25px' }}>
                Submit
              </Button>
            </form>
          </div>

          {/* Certificate display logic */}

          <div className={`certificate-container ${isCertificateVisible ? 'visible' : ''}`}>
        {/* Top section with logo and text */}
        <div className="certificate-header">
          <div className="certificate-info">
            <span className="info-left">Certificate No. {formData.certificateNo}</span>
            <img src="NAD-Logo.png" alt="Academy Logo" className="logo-image" />
            <span className="info-right">Enrollment No. {formData.enrollmentNo}</span>
          </div>
          <p className="logo-text">Sikar, Rajasthan - 332001</p>

          <div className="certificate-title-container">
            <h1 className="certificate-title">CERTIFICATE</h1>
            <h2 className="certificate-subtitle">OF COMPLETION</h2>
          </div>
        </div>

        {/* Body of the certificate */}
        <div className="certificate-body">
          <p className="certificate-presented">proudly presented to</p>
          <div className="certificate-recipient">
          <p className='p-letter-space'>{formData.recipientName}</p>
            <hr className="line" />
           
          </div>
          <p className="certificate-description">for successfully completing the course of</p>
          <div className="certificate-course">
          <p className='p-letter-space'>{formData.courseName}</p>
            <hr className="line" />
           
          </div>

          <p className="certificate-duration">
            with National Academy of Design in a duration of 
          </p>
          <div>
            <p className='p-letter-space'>{formData.duration}</p>
          </div>

          <div className="certificate-date">
            <hr className="line" />
            <p>On date </p>
           
            <p className='p-letter-space'>{formData.date}</p>
            <hr className="line" />

          </div>
        </div>

        {/* Footer with signatures */}
        <div className="certificate-footer">
          <div className="footer-left">
            <hr className="side-line" />
            <p>SUMIT KUMAR</p>
            <p>Center Head</p>
          </div>
          <div className="footer-right">
            <hr className="side-line" />
            <p>URMILA JANGIR</p>
            <p>Managing Director</p>
          </div>
        </div>
      </div>


        </Container>
        <Footer />
      </Box>
      
    </Box>
    
  );
};

export default StudentCertificate;
