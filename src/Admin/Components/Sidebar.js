// // src/components/Sidebar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Drawer, List, ListItem, ListItemText, Divider, Collapse, IconButton, useMediaQuery, useTheme
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import HomeIcon from '@mui/icons-material/Home';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import SchoolIcon from '@mui/icons-material/School';
// import ImageIcon from '@mui/icons-material/Image';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import ContactMailIcon from '@mui/icons-material/ContactMail'; // For Contact Us
// import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'; // For Enquiry
// import WorkOutlineIcon from '@mui/icons-material/WorkOutline'; // For Career
// import AccountBoxIcon from '@mui/icons-material/AccountBox'; // Student Portal icon
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; // Fees Structure icon
// import AssignmentIcon from '@mui/icons-material/Assignment'; // Document Verification icon

// const Sidebar = ({
//   open, onDrawerToggle, aboutOpen, onAboutToggle, coursesOpen, onCoursesToggle,
//   ugOpen, onUgToggle, pgOpen, onPgToggle, diplomaOpen, onDiplomaToggle
// }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   return (
//     <Drawer
//       variant={isMobile ? "temporary" : "permanent"}
//       anchor="left"
//       open={isMobile ? open : true}
//       onClose={isMobile ? onDrawerToggle : undefined}
//       sx={{
//         width: 240,
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: 240,
//           boxShadow: 3,
//           display: 'flex',
//           flexDirection: 'column',
//         },
//       }}
//     >
//       {isMobile && (
//         <IconButton onClick={onDrawerToggle} sx={{ alignSelf: 'flex-end' }}>
//           <CloseIcon />
//         </IconButton>
//       )}
//       <Divider />
//       <List>
//         <ListItem component="a" button sx={{ mt: { xs: 2, md: 8 } }} href="/admin-home">
//           <HomeIcon sx={{ marginRight: 2 }} />
//           <ListItemText primary="Home" />
//         </ListItem>
//         <ListItem button onClick={onAboutToggle}>
//           <DashboardIcon sx={{ marginRight: 2 }} />
//           <ListItemText primary="About" />
//           {aboutOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//         </ListItem>
//         <Collapse in={aboutOpen} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button sx={{ pl: 4 }}>
//               <ListItemText primary="About Us" />
//             </ListItem>
//             <ListItem button sx={{ pl: 4 }}>
//               <ListItemText primary="Mentor" />
//             </ListItem>
//             <ListItem button sx={{ pl: 4 }}>
//               <ListItemText primary="Our Team" />
//             </ListItem>
//           </List>
//         </Collapse>
//         <ListItem button onClick={onCoursesToggle}>
//           <SchoolIcon sx={{ marginRight: 2 }} />
//           <ListItemText primary="Our Courses" />
//           {coursesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//         </ListItem>
//         <Collapse in={coursesOpen} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button onClick={onUgToggle} sx={{ pl: 4 }}>
//               <ListItemText primary="UG" />
//               {ugOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//             </ListItem>
//             <Collapse in={ugOpen} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding sx={{ pl: 6 }}>
//                 {/* UG Courses */}
//                 <ListItem button>
//                   <ListItemText primary="B.A" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="B.Com" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="B.Sc" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="B.B.A" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="B.Voc Interior Design" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="B.Voc Graphic Design" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="B.Voc Fashion Design" />
//                 </ListItem>
//                 {/* Add more courses as needed */}
//               </List>
//             </Collapse>
//             <ListItem button onClick={onPgToggle} sx={{ pl: 4 }}>
//               <ListItemText primary="PG" />
//               {pgOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//             </ListItem>
//             <Collapse in={pgOpen} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding sx={{ pl: 6 }}>
//                 {/* PG Courses */}
//                 <ListItem button>
//                   <ListItemText primary="M.A" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="M.Com" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="M.Sc" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="M.B.A" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="M.Voc Fashion Design" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="M.Voc Graphic Design" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="M.Voc Interior Design" />
//                 </ListItem>
//                 {/* Add more courses as needed */}
//               </List>
//             </Collapse>
//             <ListItem button onClick={onDiplomaToggle} sx={{ pl: 4 }}>
//               <ListItemText primary="Diploma" />
//               {diplomaOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//             </ListItem>
//             <Collapse in={diplomaOpen} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding sx={{ pl: 6 }}>
//                 {/* Diploma Courses */}
//                 <ListItem button>
//                   <ListItemText primary="Architecture, Engineering & Construction" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="Web Development & Design" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="Fashion Design" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="Graphic Design" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="Jewellery Design" />
//                 </ListItem>
//                 {/* Add more courses as needed */}
//               </List>
//             </Collapse>
//           </List>
//         </Collapse>
//         <ListItem button component="a" href="/admin-gallery">
//           <ImageIcon sx={{ marginRight: 2 }} />
//           <ListItemText primary="Gallery" />
//         </ListItem>

//         <ListItem button>
//       <SchoolIcon sx={{ marginRight: 2 }} /> {/* Use the School icon */}
//       <ListItemText primary="Placement" />
//     </ListItem>


//     <ListItem button component="a" href="/contact-us-form-data">
//         <ContactMailIcon sx={{ color: 'black', marginRight: 2 }} />
//         <ListItemText primary="Contact Us Form Data" primaryTypographyProps={{ style: { color: 'black' } }} />
//       </ListItem>

//       <ListItem button component="a" href="/enquiry-form-data">
//         <QuestionAnswerIcon sx={{ color: 'black', marginRight: 2 }} />
//         <ListItemText primary="Enquiry Form Data" primaryTypographyProps={{ style: { color: 'black' } }} />
//       </ListItem>

//       <ListItem button component="a" href="/admission-form-data">
//         <SchoolIcon sx={{ color: 'black', marginRight: 2 }} />
//         <ListItemText primary="Admission Form Data" primaryTypographyProps={{ style: { color: 'black' } }} />
//       </ListItem>

//       <ListItem button component="a" href="/career-form-data">
//         <WorkOutlineIcon sx={{ color: 'black', marginRight: 2 }} />
//         <ListItemText primary="Career Form Data" primaryTypographyProps={{ style: { color: 'black' } }} />
//       </ListItem>

//       <ListItem button component={Link} to="/create-student-id">
//           <SchoolIcon sx={{ color: 'black', marginRight: 2 }} />
//           <ListItemText primary="Create Student ID" primaryTypographyProps={{ style: { color: 'black' } }} />
//         </ListItem>

//         <ListItem button component={Link} to="/student-portal">
//           <AccountBoxIcon sx={{ color: 'black', marginRight: 2 }} />
//           <ListItemText primary="Student Portal" primaryTypographyProps={{ style: { color: 'black' } }} />
//         </ListItem>
//         <ListItem button component={Link} to="/fees-structure">
//           <AttachMoneyIcon sx={{ color: 'black', marginRight: 2 }} />
//           <ListItemText primary="Fees Structure" primaryTypographyProps={{ style: { color: 'black' } }} />
//         </ListItem>

//         <ListItem button component={Link} to="/document-verification">
//           <AssignmentIcon sx={{ color: 'black', marginRight: 2 }} />
//           <ListItemText primary="Document Verification" primaryTypographyProps={{ style: { color: 'black' } }} />
//         </ListItem>

//         <ListItem button component="a" href="/admin-login">
//         {/* <ListItemIcon> */}
//           <ExitToAppIcon sx={{ marginRight: 2 }} />
//         {/* </ListItemIcon> */}
//         <ListItemText primary="Logout" />
//       </ListItem>

//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;

// src/components/Sidebar.js
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
import ContactMailIcon from '@mui/icons-material/ContactMail'; // For Contact Us
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'; // For Enquiry
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'; // For Career
import AccountBoxIcon from '@mui/icons-material/AccountBox'; // Student Portal icon
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; // Fees Structure icon
import AssignmentIcon from '@mui/icons-material/Assignment'; // Document Verification icon

const Sidebar = ({
  open, onDrawerToggle, aboutOpen, onAboutToggle, coursesOpen, onCoursesToggle,
  ugOpen, onUgToggle, pgOpen, onPgToggle, diplomaOpen, onDiplomaToggle
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [openStudentDetails, setOpenStudentDetails] = useState(false);

  const handleStudentDetailsClick = () => {
    setOpenStudentDetails(!openStudentDetails);
  };

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
          <HomeIcon  sx={{color: 'black', marginRight: 2 }} />
          <ListItemText primary="Home" primaryTypographyProps={{ style: { color: 'black' } }} />
        </ListItem>

        <ListItem button onClick={onAboutToggle}>
          <DashboardIcon sx={{ marginRight: 2 }} />
          <ListItemText primary="About" />
          {aboutOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={aboutOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Mentor" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Our Team" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={onCoursesToggle}>
          <SchoolIcon sx={{ marginRight: 2 }} />
          <ListItemText primary="Our Courses" />
          {coursesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={coursesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={onUgToggle} sx={{ pl: 4 }}>
              <ListItemText primary="UG" />
              {ugOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={ugOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 6 }}>
                {/* UG Courses */}
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
            <ListItem button onClick={onPgToggle} sx={{ pl: 4 }}>
              <ListItemText primary="PG" />
              {pgOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={pgOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 6 }}>
                {/* PG Courses */}
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
            <ListItem button onClick={onDiplomaToggle} sx={{ pl: 4 }}>
              <ListItemText primary="Diploma" />
              {diplomaOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={diplomaOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 6 }}>
                {/* Diploma Courses */}
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

        <ListItem button component="a" href="/admin-gallery">
          <ImageIcon  sx={{color: 'black', marginRight: 2 }} />
          <ListItemText primary="Gallery" primaryTypographyProps={{ style: { color: 'black' } }} />
        </ListItem>

        <ListItem button component="a" href="/placement">
          <SchoolIcon  sx={{color: 'black', marginRight: 2 }} />
          <ListItemText primary="Placement" primaryTypographyProps={{ style: { color: 'black' } }} />
        </ListItem>

        <ListItem button component="a" href="/contact-us-form-data">
          <ContactMailIcon sx={{ color: 'black', marginRight: 2 }} />
          <ListItemText primary="Contact Us Form Data" primaryTypographyProps={{ style: { color: 'black' } }} />
        </ListItem>

        <ListItem button component="a" href="/enquiry-form-data">
          <QuestionAnswerIcon sx={{ color: 'black', marginRight: 2 }} />
          <ListItemText primary="Enquiry Form Data" primaryTypographyProps={{ style: { color: 'black' } }} />
        </ListItem>

        <ListItem button component="a" href="/admission-form-data">
          <SchoolIcon sx={{ color: 'black', marginRight: 2 }} />
          <ListItemText primary="Admission Form Data" primaryTypographyProps={{ style: { color: 'black' } }} />
        </ListItem>

        <ListItem button component="a" href="/career-form-data">
          <WorkOutlineIcon sx={{ color: 'black', marginRight: 2 }} />
          <ListItemText primary="Career Form Data" primaryTypographyProps={{ style: { color: 'black' } }} />
        </ListItem>

        <ListItem button onClick={handleStudentDetailsClick}>
          <SchoolIcon sx={{ color: 'black', marginRight: 2 }} />
          <ListItemText primary="Student Details" primaryTypographyProps={{ style: { color: 'black' } }} />
          {openStudentDetails ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={openStudentDetails} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component="a" href="/student-portal">
              <AccountBoxIcon sx={{ color: 'black', marginRight: 2 }} />
              <ListItemText primary="Student Portal" primaryTypographyProps={{ style: { color: 'black' } }} />
            </ListItem>
            <ListItem button component="a" href="/fees-structure">
              <AttachMoneyIcon sx={{ color: 'black', marginRight: 2 }} />
              <ListItemText primary="Fees Structure" primaryTypographyProps={{ style: { color: 'black' } }} />
            </ListItem>
            <ListItem button component="a" href="/document-verification">
              <AssignmentIcon sx={{ color: 'black', marginRight: 2 }} />
              <ListItemText primary="Document Verification" primaryTypographyProps={{ style: { color: 'black' } }} />
            </ListItem>
          </List>
        </Collapse>

     
        <ListItem button component="a" href="/logout">
          <ExitToAppIcon sx={{color: 'black', marginRight: 2 }} />
          <ListItemText primary="Logout" primaryTypographyProps={{ style: { color: 'black' } }} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
