// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './home'; // Import Home page
// import Aboutus from './Components/aboutus'; 
// import FoundingMembers from './Components/founding-members'; 
// import Staff from './Components/staff'; 
// import Bacourse from './Components/ugcourses/ba'; 
// import Bcom from './Components/ugcourses/bcom'; 
// import Bsc from './Components/ugcourses/bsc'; 
// import Bba from './Components/ugcourses/bba'; 

// import BvocInterior from './Components/ugcourses/bvoc-interior-design'; 
// import BvocGraphic from './Components/ugcourses/bvoc-graphic-design'; 
// import BvocFashion from './Components/ugcourses/bvoc-fashion-design'; 

// import MvocInterior from './Components/pgcourses/mvoc-interior-design'; 
// import MvocGraphic from './Components/pgcourses/mvoc-graphic-design'; 
// import MvocFashion from './Components/pgcourses/mvoc-fashion-design'; 

// import MaCourse from './Components/pgcourses/ma'; 
// import McomCourse from './Components/pgcourses/mcom'; 
// import MscCourse from './Components/pgcourses/msc'; 

// import ContactUs from './Components/contact-us'; 
// import Placement from './Components/placement'; 
// import Collaboration from './Components/collaboration'; 
// import Affiliation from './Components/affiliation'; 
// import Admission from './Components/admission'; 
// import Login from './Components/login'; 

// import ArchitectureDesign from './Components/diploma/architecture-design'; 
// import FashionDesign from './Components/diploma/fashion-design'; 
// import GraphicDesign from './Components/diploma/graphic-design'; 
// import JewelleryDesign from './Components/diploma/jewellery-design'; 
// import WebDesign from './Components/diploma/web-design'; 

// import Gallery from './Components/gallery'; 
// import Footer from './Components/footer'; 
// import Header from './Components/header';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
     
//         <Routes>
//           <Route path="/" element={<Home />} /> 
//           <Route path="/aboutus" element={<Aboutus />} /> 
//           <Route path="/founding-members" element={<FoundingMembers />} /> 
//           <Route path="/staff" element={<Staff />} /> 
//           <Route path="/ba" element={<Bacourse />} /> 
//           <Route path="/bcom" element={<Bcom />} /> 
//           <Route path="/bsc" element={<Bsc />} /> 
//           <Route path="/bba" element={<Bba />} /> 

//           <Route path="/bvoc-interior-design" element={<BvocInterior />} /> 
//           <Route path="/bvoc-graphic-design" element={<BvocGraphic />} /> 
//           <Route path="/bvoc-fashion-design" element={<BvocFashion />} /> 

//           <Route path="/mvoc-interior-design" element={<MvocInterior />} /> 
//           <Route path="/mvoc-graphic-design" element={<MvocGraphic />} /> 
//           <Route path="/mvoc-fashion-design" element={<MvocFashion />} /> 

//           <Route path="/ma" element={<MaCourse />} /> 
//           <Route path="/msc" element={<MscCourse />} /> 
//           <Route path="/mcom" element={<McomCourse />} />

//           <Route path="/contact-us" element={<ContactUs />} /> 
//           <Route path="/placement" element={<Placement />} /> 
//           <Route path="/admission" element={<Admission />} /> 
//           <Route path="/gallery" element={<Gallery />} /> 
//           <Route path="/collaboration" element={<Collaboration />} /> 
//           <Route path="/affiliation" element={<Affiliation />} /> 

//           <Route path="/architecture-design" element={<ArchitectureDesign />} /> 
//           <Route path="/web-design" element={<WebDesign />} /> 
//           <Route path="/fashion-design" element={<FashionDesign />} /> 
//           <Route path="/graphic-design" element={<GraphicDesign />} /> 
//           <Route path="/jewellery-design" element={<JewelleryDesign />} /> 

//           <Route path="/login" element={<Login />} /> 

//         </Routes>
//         <Footer /> 
//       </div>
//     </Router>
//   );
// }

// export default App;


// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './home'; // Import Home page
// import Admin from '../src/Admin/login';
// import Aboutus from './Components/aboutus'; 
// import FoundingMembers from './Components/founding-members'; 
// import Staff from './Components/staff'; 
// import Bacourse from './Components/ugcourses/ba'; 
// import Bcom from './Components/ugcourses/bcom'; 
// import Bsc from './Components/ugcourses/bsc'; 
// import Bba from './Components/ugcourses/bba'; 

// import BvocInterior from './Components/ugcourses/bvoc-interior-design'; 
// import BvocGraphic from './Components/ugcourses/bvoc-graphic-design'; 
// import BvocFashion from './Components/ugcourses/bvoc-fashion-design'; 

// import MvocInterior from './Components/pgcourses/mvoc-interior-design'; 
// import MvocGraphic from './Components/pgcourses/mvoc-graphic-design'; 
// import MvocFashion from './Components/pgcourses/mvoc-fashion-design'; 

// import MaCourse from './Components/pgcourses/ma'; 
// import McomCourse from './Components/pgcourses/mcom'; 
// import MscCourse from './Components/pgcourses/msc'; 

// import ContactUs from './Components/contact-us'; 
// import Placement from './Components/placement'; 
// import Collaboration from './Components/collaboration'; 
// import Affiliation from './Components/affiliation'; 
// import Admission from './Components/admission'; 
// import Login from './Components/login'; 

// import ArchitectureDesign from './Components/diploma/architecture-design'; 
// import FashionDesign from './Components/diploma/fashion-design'; 
// import GraphicDesign from './Components/diploma/graphic-design'; 
// import JewelleryDesign from './Components/diploma/jewellery-design'; 
// import WebDesign from './Components/diploma/web-design'; 

// import Gallery from './Components/gallery'; 
// import Career from './Components/career'; 
// import Footer from './Components/footer'; 
// import Header from './Components/header';
// import ScrollIcon from './Components/scrollIcon'; // Import ScrollIcon

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />

//         {/* Scroll Icon added */}
//         <ScrollIcon />

//         <Routes>
//           <Route path="/" element={<Home />} /> 
          
//           <Route path="/aboutus" element={<Aboutus />} /> 
//           <Route path="/founding-members" element={<FoundingMembers />} /> 
//           <Route path="/staff" element={<Staff />} /> 
//           <Route path="/career" element={<Career />} /> 
//           <Route path="/ba" element={<Bacourse />} /> 
//           <Route path="/bcom" element={<Bcom />} /> 
//           <Route path="/bsc" element={<Bsc />} /> 
//           <Route path="/bba" element={<Bba />} /> 

//           <Route path="/bvoc-interior-design" element={<BvocInterior />} /> 
//           <Route path="/bvoc-graphic-design" element={<BvocGraphic />} /> 
//           <Route path="/bvoc-fashion-design" element={<BvocFashion />} /> 

//           <Route path="/mvoc-interior-design" element={<MvocInterior />} /> 
//           <Route path="/mvoc-graphic-design" element={<MvocGraphic />} /> 
//           <Route path="/mvoc-fashion-design" element={<MvocFashion />} /> 

//           <Route path="/ma" element={<MaCourse />} /> 
//           <Route path="/msc" element={<MscCourse />} /> 
//           <Route path="/mcom" element={<McomCourse />} />

//           <Route path="/contact-us" element={<ContactUs />} /> 
//           <Route path="/placement" element={<Placement />} /> 
//           <Route path="/admission" element={<Admission />} /> 
//           <Route path="/gallery" element={<Gallery />} /> 
//           <Route path="/collaboration" element={<Collaboration />} /> 
//           <Route path="/affiliation" element={<Affiliation />} /> 

//           <Route path="/architecture-design" element={<ArchitectureDesign />} /> 
//           <Route path="/web-design" element={<WebDesign />} /> 
//           <Route path="/fashion-design" element={<FashionDesign />} /> 
//           <Route path="/graphic-design" element={<GraphicDesign />} /> 
//           <Route path="/jewellery-design" element={<JewelleryDesign />} /> 

//           <Route path="/login" element={<Login />} /> 

//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './home'; // Import Home page
// import Admin from '../src/Admin/login';
// import AdminHome from '../src/Admin/home';

// import AdminAboutUs from '../src/Admin/Components/admin-aboutus';
// import AdminStudentPortal from '../src/Admin/Components/admin-student-portal.js';
// import AdminDocumentVerification from '../src/Admin/Components/admin-document-verification';
// import AdminFeesStructure from '../src/Admin/Components/admin-fees-structure.js';
// import AdminStudentCertificate from '../src/Admin/Components/admin-student-certificate';
// import AdminMentor from '../src/Admin/Components/admin-mentor';
// import AdminTeam from '../src/Admin/Components/admin-team';
// import AdminPlacement from '../src/Admin/Components/admin-placement';
// import AdminContactus from '../src/Admin/Components/admin-contactus';
// import AdminAdmission from '../src/Admin/Components/admin-admission';
// import AdminEnquiry from '../src/Admin/Components/admin-enquiry';

// import AdminGallery from '../src/Admin/Components/gallery';
// //import StudentPortal from '../src/Admin/Components/admin-student-portal';
// import Aboutus from './Components/aboutus'; 
// import FoundingMembers from './Components/founding-members'; 
// import Staff from './Components/staff'; 
// import Bacourse from './Components/ugcourses/ba'; 
// import Bcom from './Components/ugcourses/bcom'; 
// import Bsc from './Components/ugcourses/bsc'; 
// import Bba from './Components/ugcourses/bba'; 

// import BvocInterior from './Components/ugcourses/bvoc-interior-design'; 
// import BvocGraphic from './Components/ugcourses/bvoc-graphic-design'; 
// import BvocFashion from './Components/ugcourses/bvoc-fashion-design'; 

// import MvocInterior from './Components/pgcourses/mvoc-interior-design'; 
// import MvocGraphic from './Components/pgcourses/mvoc-graphic-design'; 
// import MvocFashion from './Components/pgcourses/mvoc-fashion-design'; 

// import MaCourse from './Components/pgcourses/ma'; 
// import McomCourse from './Components/pgcourses/mcom'; 
// import MscCourse from './Components/pgcourses/msc'; 

// import ContactUs from './Components/contact-us'; 
// import Placement from './Components/placement'; 
// import StudentProfile from './Components/studentProfile.js'; 
// import Collaboration from './Components/collaboration'; 
// import Affiliation from './Components/affiliation'; 
// import Admission from './Components/admission'; 
// import Login from './Components/login'; 

// import ArchitectureDesign from './Components/diploma/architecture-design'; 
// import FashionDesign from './Components/diploma/fashion-design'; 
// import GraphicDesign from './Components/diploma/graphic-design'; 
// import JewelleryDesign from './Components/diploma/jewellery-design'; 
// import WebDesign from './Components/diploma/web-design'; 

// import Gallery from './Components/gallery'; 
// import Career from './Components/career'; 
// import PublicLayout from './layouts/PublicLayout'; // Import PublicLayout

// function App() {
//   return (

//     <Router>

//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={
//           <PublicLayout>
//             <Home />
//           </PublicLayout>
//         } />
//         <Route path="/aboutus" element={
//           <PublicLayout>
//             <Aboutus />
//           </PublicLayout>
//         } />
//         <Route path="/founding-members" element={
//           <PublicLayout>
//             <FoundingMembers />
//           </PublicLayout>
//         } />
//         <Route path="/staff" element={
//           <PublicLayout>
//             <Staff />
//           </PublicLayout>
//         } />
//         <Route path="/career" element={
//           <PublicLayout>
//             <Career />
//           </PublicLayout>
//         } />
//         <Route path="/ba" element={
//           <PublicLayout>
//             <Bacourse />
//           </PublicLayout>
//         } />
//         <Route path="/bcom" element={
//           <PublicLayout>
//             <Bcom />
//           </PublicLayout>
//         } />
//         <Route path="/bsc" element={
//           <PublicLayout>
//             <Bsc />
//           </PublicLayout>
//         } />
//         <Route path="/bba" element={
//           <PublicLayout>
//             <Bba />
//           </PublicLayout>
//         } />

//         <Route path="/bvoc-interior-design" element={
//           <PublicLayout>
//             <BvocInterior />
//           </PublicLayout>
//         } />
//         <Route path="/bvoc-graphic-design" element={
//           <PublicLayout>
//             <BvocGraphic />
//           </PublicLayout>
//         } />
//         <Route path="/bvoc-fashion-design" element={
//           <PublicLayout>
//             <BvocFashion />
//           </PublicLayout>
//         } />

//         <Route path="/mvoc-interior-design" element={
//           <PublicLayout>
//             <MvocInterior />
//           </PublicLayout>
//         } />
//         <Route path="/mvoc-graphic-design" element={
//           <PublicLayout>
//             <MvocGraphic />
//           </PublicLayout>
//         } />
//         <Route path="/mvoc-fashion-design" element={
//           <PublicLayout>
//             <MvocFashion />
//           </PublicLayout>
//         } />

//         <Route path="/ma" element={
//           <PublicLayout>
//             <MaCourse />
//           </PublicLayout>
//         } />
//         <Route path="/msc" element={
//           <PublicLayout>
//             <MscCourse />
//           </PublicLayout>
//         } />
//         <Route path="/mcom" element={
//           <PublicLayout>
//             <McomCourse />
//           </PublicLayout>
//         } />

//         <Route path="/contact-us" element={
//           <PublicLayout>
//             <ContactUs />
//           </PublicLayout>
//         } />
//         <Route path="/placement" element={
//           <PublicLayout>
//             <Placement />
//           </PublicLayout>
//         } />

// <Route path="/studentProfile" element={
//           <PublicLayout>
//             <StudentProfile />
//           </PublicLayout>
//         } />


//         <Route path="/admission" element={
//           <PublicLayout>
//             <Admission />
//           </PublicLayout>
//         } />
//         <Route path="/gallery" element={
//           <PublicLayout>
//             <Gallery />
//           </PublicLayout>
//         } />
//         <Route path="/collaboration" element={
//           <PublicLayout>
//             <Collaboration />
//           </PublicLayout>
//         } />
//         <Route path="/affiliation" element={
//           <PublicLayout>
//             <Affiliation />
//           </PublicLayout>
//         } />

//         <Route path="/architecture-design" element={
//           <PublicLayout>
//             <ArchitectureDesign />
//           </PublicLayout>
//         } />
//         <Route path="/web-design" element={
//           <PublicLayout>
//             <WebDesign />
//           </PublicLayout>
//         } />
//         <Route path="/fashion-design" element={
//           <PublicLayout>
//             <FashionDesign />
//           </PublicLayout>
//         } />
//         <Route path="/graphic-design" element={
//           <PublicLayout>
//             <GraphicDesign />
//           </PublicLayout>
//         } />
//         <Route path="/jewellery-design" element={
//           <PublicLayout>
//             <JewelleryDesign />
//           </PublicLayout>
//         } />

//         <Route path="/login" element={
//           <PublicLayout>
//             <Login />
//           </PublicLayout>
//         } />
//         <Route path="/admin-login" element={<Admin />} />
//         <Route path="/admin-home" element={<AdminHome />} />
//         <Route path="/admin-gallery" element={<AdminGallery />} />
//         <Route path="/admin-aboutus" element={<AdminAboutUs />} />

//         <Route path="/admin-mentor" element={<AdminMentor />} />
//         <Route path="/admin-team" element={<AdminTeam />} />
//         <Route path="/admin-placement" element={<AdminPlacement />} />
//         <Route path="/admin-contactus" element={<AdminContactus />} />
//         <Route path="/admin-admission" element={<AdminAdmission />} />
//         <Route path="/admin-enquiry" element={<AdminEnquiry/>} />
//         <Route path="/admin-student-certificate" element={<AdminStudentCertificate/>} />
//         <Route path="/admin-fees-structure" element={<AdminFeesStructure />} />
//         <Route path="/admin-document-verification" element={<AdminDocumentVerification />} />
//         <Route path="/admin-student-portal" element={<AdminStudentPortal />} />

//       </Routes>
//     </Router>

//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './home'; // Import Home page
import Admin from './Admin/login';
import AdminHome from './Admin/home';

// Import Admin Components
import AdminAboutUs from './Admin/Components/admin-aboutus';
import AdminStudentPortal from './Admin/Components/admin-student-portal';
import AdminDocumentVerification from './Admin/Components/admin-document-verification';
import AdminFeesStructure from './Admin/Components/admin-fees-structure';
import AdminStudentCertificate from './Admin/Components/admin-student-certificate';
import AdminMentor from './Admin/Components/admin-mentor';
import AdminTeam from './Admin/Components/admin-team';
import AdminPlacement from './Admin/Components/admin-placement';
import AdminContactus from './Admin/Components/admin-contactus';
import AdminAdmission from './Admin/Components/admin-admission';
import AdminEnquiry from './Admin/Components/admin-enquiry';
import AdminGallery from './Admin/Components/gallery';
import AdminCollaborators from './Admin/Components/admin-collaborators';
import AdminAffiliation from './Admin/Components/admin-affiliation';

// Import Public Components
import Aboutus from './Components/aboutus'; 
import FoundingMembers from './Components/founding-members'; 
import Staff from './Components/staff'; 
import Bacourse from './Components/ugcourses/ba'; 
import Bcom from './Components/ugcourses/bcom'; 
import Bsc from './Components/ugcourses/bsc'; 
import Bba from './Components/ugcourses/bba'; 
import BvocInterior from './Components/ugcourses/bvoc-interior-design'; 
import BvocGraphic from './Components/ugcourses/bvoc-graphic-design'; 
import BvocFashion from './Components/ugcourses/bvoc-fashion-design'; 
import MvocInterior from './Components/pgcourses/mvoc-interior-design'; 
import MvocGraphic from './Components/pgcourses/mvoc-graphic-design'; 
import MvocFashion from './Components/pgcourses/mvoc-fashion-design'; 
import MaCourse from './Components/pgcourses/ma'; 
import McomCourse from './Components/pgcourses/mcom'; 
import MscCourse from './Components/pgcourses/msc'; 
import ContactUs from './Components/contact-us'; 
import Placement from './Components/placement'; 
import StudentProfile from './Components/studentProfile'; 
import Collaboration from './Components/collaboration'; 
import Affiliation from './Components/affiliation'; 
import Admission from './Components/admission'; 
import Login from './Components/login'; 
import ArchitectureDesign from './Components/diploma/architecture-design'; 
import FashionDesign from './Components/diploma/fashion-design'; 
import GraphicDesign from './Components/diploma/graphic-design'; 
import JewelleryDesign from './Components/diploma/jewellery-design'; 
import WebDesign from './Components/diploma/web-design'; 
import Gallery from './Components/gallery'; 
import Career from './Components/career'; 
import PublicLayout from './layouts/PublicLayout'; // Import PublicLayout

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   // Check if user session exists in localStorage
  //   const studentData = localStorage.getItem("Student Data");
  //   if (studentData) {
  //     setIsAuthenticated(true); // User is authenticated
  //   }
  // }, []);
  useEffect(() => {
    const studentData = localStorage.getItem("Student Data");
    if (studentData) {
        const parsedData = JSON.parse(studentData);
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        // Check if the token is expired
        if (parsedData.token) {
            const tokenPayload = JSON.parse(atob(parsedData.token.split('.')[1]));
            const isExpired = tokenPayload.exp < currentTime; // Assuming exp is in seconds
            if (!isExpired) {
                setIsAuthenticated(true);
            } else {
                localStorage.removeItem("Student Data"); // Clear expired token
            }
        }
    }
}, []);


  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        } />
        <Route path="/aboutus" element={
          <PublicLayout>
            <Aboutus />
          </PublicLayout>
        } />
        <Route path="/founding-members" element={
          <PublicLayout>
            <FoundingMembers />
          </PublicLayout>
        } />
        <Route path="/staff" element={
          <PublicLayout>
            <Staff />
          </PublicLayout>
        } />
        <Route path="/career" element={
          <PublicLayout>
            <Career />
          </PublicLayout>
        } />
        <Route path="/ba" element={
          <PublicLayout>
            <Bacourse />
          </PublicLayout>
        } />
        <Route path="/bcom" element={
          <PublicLayout>
            <Bcom />
          </PublicLayout>
        } />
        <Route path="/bsc" element={
          <PublicLayout>
            <Bsc />
          </PublicLayout>
        } />
        <Route path="/bba" element={
          <PublicLayout>
            <Bba />
          </PublicLayout>
        } />
        <Route path="/bvoc-interior-design" element={
          <PublicLayout>
            <BvocInterior />
          </PublicLayout>
        } />
        <Route path="/bvoc-graphic-design" element={
          <PublicLayout>
            <BvocGraphic />
          </PublicLayout>
        } />
        <Route path="/bvoc-fashion-design" element={
          <PublicLayout>
            <BvocFashion />
          </PublicLayout>
        } />
        <Route path="/mvoc-interior-design" element={
          <PublicLayout>
            <MvocInterior />
          </PublicLayout>
        } />
        <Route path="/mvoc-graphic-design" element={
          <PublicLayout>
            <MvocGraphic />
          </PublicLayout>
        } />
        <Route path="/mvoc-fashion-design" element={
          <PublicLayout>
            <MvocFashion />
          </PublicLayout>
        } />
        <Route path="/ma" element={
          <PublicLayout>
            <MaCourse />
          </PublicLayout>
        } />
        <Route path="/msc" element={
          <PublicLayout>
            <MscCourse />
          </PublicLayout>
        } />
        <Route path="/mcom" element={
          <PublicLayout>
            <McomCourse />
          </PublicLayout>
        } />
        <Route path="/contact-us" element={
          <PublicLayout>
            <ContactUs />
          </PublicLayout>
        } />
        <Route path="/placement" element={
          <PublicLayout>
            <Placement />
          </PublicLayout>
        } />
        <Route path="/studentProfile" element={
          isAuthenticated ? (
            <PublicLayout>
              <StudentProfile />
            </PublicLayout>
          ) : (
            <Navigate to="/login" />
          )
        } />
        <Route path="/admission" element={
          <PublicLayout>
            <Admission />
          </PublicLayout>
        } />
        <Route path="/gallery" element={
          <PublicLayout>
            <Gallery />
          </PublicLayout>
        } />
        <Route path="/collaboration" element={
          <PublicLayout>
            <Collaboration />
          </PublicLayout>
        } />
        <Route path="/affiliation" element={
          <PublicLayout>
            <Affiliation />
          </PublicLayout>
        } />
        <Route path="/architecture-design" element={
          <PublicLayout>
            <ArchitectureDesign />
          </PublicLayout>
        } />
        <Route path="/web-design" element={
          <PublicLayout>
            <WebDesign />
          </PublicLayout>
        } />
        <Route path="/fashion-design" element={
          <PublicLayout>
            <FashionDesign />
          </PublicLayout>
        } />
        <Route path="/graphic-design" element={
          <PublicLayout>
            <GraphicDesign />
          </PublicLayout>
        } />
        <Route path="/jewellery-design" element={
          <PublicLayout>
            <JewelleryDesign />
          </PublicLayout>
        } />
        <Route path="/login" element={
          <PublicLayout>
            <Login setIsAuthenticated={setIsAuthenticated} />
          </PublicLayout>
        } />
        
        {/* Admin Routes */}
        <Route path="/admin-login" element={<Admin />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/admin-gallery" element={<AdminGallery />} />
        <Route path="/admin-aboutus" element={<AdminAboutUs />} />
        <Route path="/admin-mentor" element={<AdminMentor />} />
        <Route path="/admin-team" element={<AdminTeam />} />
        <Route path="/admin-placement" element={<AdminPlacement />} />
        <Route path="/admin-contactus" element={<AdminContactus />} />
        <Route path="/admin-admission" element={<AdminAdmission />} />
        <Route path="/admin-enquiry" element={<AdminEnquiry />} />
        <Route path="/admin-student-certificate" element={<AdminStudentCertificate />} />
        <Route path="/admin-fees-structure" element={<AdminFeesStructure />} />
        <Route path="/admin-document-verification" element={<AdminDocumentVerification />} />
        <Route path="/admin-student-portal" element={<AdminStudentPortal />} />
        <Route path="/admin-collaborators" element={<AdminCollaborators />} />
        <Route path="/admin-affiliation" element={<AdminAffiliation />} />
        
        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
