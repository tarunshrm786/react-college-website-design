import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer, List, ListItem, ListItemText, Divider, Collapse, IconButton, useMediaQuery, useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import ImageIcon from '@mui/icons-material/Image';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ContactMailIcon from '@mui/icons-material/ContactMail'; 
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'; 
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'; 
import AccountBoxIcon from '@mui/icons-material/AccountBox'; 
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; 
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'; 

const Sidebar = ({ open, onDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // State for dropdowns
  const [aboutOpen, setAboutOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [ugOpen, setUgOpen] = useState(false);
  const [pgOpen, setPgOpen] = useState(false);
  const [diplomaOpen, setDiplomaOpen] = useState(false);
  const [openStudentDetails, setOpenStudentDetails] = useState(false);

  // Handlers for toggling dropdowns
  const handleAboutToggle = () => setAboutOpen(!aboutOpen);
  const handleCoursesToggle = () => setCoursesOpen(!coursesOpen);
  const handleUgToggle = () => setUgOpen(!ugOpen);
  const handlePgToggle = () => setPgOpen(!pgOpen);
  const handleDiplomaToggle = () => setDiplomaOpen(!diplomaOpen);
  const handleStudentDetailsClick = () => setOpenStudentDetails(!openStudentDetails);

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      anchor="left"
      open={isMobile ? open : true}
      onClose={isMobile ? onDrawerToggle : undefined}
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
      {isMobile && (
        <IconButton onClick={onDrawerToggle} sx={{ alignSelf: 'flex-end' }}>
          <CloseIcon />
        </IconButton>
      )}
      <Divider />
      <List>
        <ListItem component="a" button sx={{ mt: { xs: 2, md: 8 } }} href="/admin-home">
          <HomeIcon sx={{ color: 'black', marginRight: 2 }} />
          <ListItemText primary="Home" primaryTypographyProps={{ style: { color: 'black' } }} />
        </ListItem>

        {/* About Section */}
        <ListItem button onClick={handleAboutToggle}>
          <DashboardIcon sx={{ marginRight: 2 }} />
          <ListItemText primary="About" />
          {aboutOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={aboutOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem component="a" button sx={{ pl: 4 }} href="/admin-aboutus">
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem component="a" button sx={{ pl: 4 }} href="/admin-mentor">
              <ListItemText primary="Mentor" />
            </ListItem>
            <ListItem component="a" button sx={{ pl: 4 }}  href="/admin-team">
              <ListItemText primary="Our Team" />
            </ListItem>
          </List>
        </Collapse>

        {/* Our Courses Section */}
        <ListItem button onClick={handleCoursesToggle}>
          <SchoolIcon sx={{ marginRight: 2 }} />
          <ListItemText primary="Our Courses" />
          {coursesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={coursesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={handleUgToggle} sx={{ pl: 4 }}>
              <ListItemText primary="UG" />
              {ugOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={ugOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 6 }}>
                <ListItem button>
                  <ListItemText primary="B.A" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="B.Com" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="B.Sc" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="B.B.A" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="B.Voc Interior Design" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="B.Voc Graphic Design" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="B.Voc Fashion Design" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handlePgToggle} sx={{ pl: 4 }}>
              <ListItemText primary="PG" />
              {pgOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={pgOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 6 }}>
                <ListItem button>
                  <ListItemText primary="M.A" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="M.Com" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="M.Sc" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="M.B.A" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="M.Voc Fashion Design" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="M.Voc Graphic Design" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="M.Voc Interior Design" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleDiplomaToggle} sx={{ pl: 4 }}>
              <ListItemText primary="Diploma" />
              {diplomaOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={diplomaOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 6 }}>
                <ListItem button>
                  <ListItemText primary="Architecture, Engineering & Construction" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Web Development & Design" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Fashion Design" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Graphic Design" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Jewellery Design" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Collapse>

        {/* Other Links */}
        <ListItem button component="a" href="/admin-gallery">
          <ImageIcon sx={{ color: 'black', marginRight: 2 }} />
          <ListItemText primary="Gallery" primaryTypographyProps={{ style: { color: 'black' } }} />
        </ListItem>

        <ListItem button component="a" href="/admin-placement">
          <SchoolIcon sx={{ color: 'black', marginRight: 2 }} />
          <ListItemText primary="Placement" primaryTypographyProps={{ style: { color: 'black' } }} />
        </ListItem>

        <ListItem button component="a" href="/admin-contactus">
          <ContactMailIcon sx={{ color: 'black', marginRight: 2 }} />
          <ListItemText primary="Contact Us Form Data" primaryTypographyProps={{ style: { color: 'black' } }} />
        </ListItem>

        <ListItem button component="a" href="/admin-enquiry">
          <QuestionAnswerIcon sx={{ color: 'black', marginRight: 2 }} />
          <ListItemText primary="Enquiry Form Data" primaryTypographyProps={{ style: { color: 'black' } }} />
        </ListItem>

        <ListItem button component="a" href="/admin-admission">
          <SchoolIcon sx={{ color: 'black', marginRight: 2 }} />
          <ListItemText primary="Admission Form Data" primaryTypographyProps={{ style: { color: 'black' } }} />
        </ListItem>


        
        <ListItem button onClick={handleStudentDetailsClick}>
          <SchoolIcon sx={{ color: 'black', marginRight: 2 }} />
          <ListItemText primary="Student Details" primaryTypographyProps={{ style: { color: 'black' } }} />
          {openStudentDetails ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={openStudentDetails} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItem button component="a" href="/admin-student-portal">
              <AccountBoxIcon sx={{ color: 'black', marginRight: 2 }} />
              <ListItemText primary="Create Student" primaryTypographyProps={{ style: { color: 'black' } }} />
            </ListItem>

            <ListItem button component="a" href="#admin-student-portal">
              <AccountBoxIcon sx={{ color: 'black', marginRight: 2 }} />
              <ListItemText primary="All Students" primaryTypographyProps={{ style: { color: 'black' } }} />
            </ListItem>

            <ListItem button component="a" href="/admin-fees-structure">
              <AttachMoneyIcon sx={{ color: 'black', marginRight: 2 }} />
              <ListItemText primary="Fees Structure" primaryTypographyProps={{ style: { color: 'black' } }} />
            </ListItem>
            <ListItem button component="a" href="/admin-document-verification">
              <AssignmentIcon sx={{ color: 'black', marginRight: 2 }} />
              <ListItemText primary="Document Verification" primaryTypographyProps={{ style: { color: 'black' } }} />
            </ListItem>

            <ListItem button component="a" href="/admin-student-certificate">
              {/* <AssignmentIcon sx={{ color: 'black', marginRight: 2 }} /> */}
              <WorkspacePremiumIcon sx={{ color: 'black', marginRight: 2 }} />
              <ListItemText primary="Certificate" primaryTypographyProps={{ style: { color: 'black' } }} />
            </ListItem>
            
          </List>
        </Collapse>
        

        {/* Logout */}
        <ListItem button component="a" href="/">
          <ExitToAppIcon sx={{ color: 'black', marginRight: 2 }} />
          <ListItemText primary="Logout" primaryTypographyProps={{ style: { color: 'black' } }} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
