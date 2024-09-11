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


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home'; // Import Home page
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
import Footer from './Components/footer'; 
import Header from './Components/header';
import ScrollIcon from './Components/scrollIcon'; // Import ScrollIcon

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* Scroll Icon added */}
        <ScrollIcon />

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/aboutus" element={<Aboutus />} /> 
          <Route path="/founding-members" element={<FoundingMembers />} /> 
          <Route path="/staff" element={<Staff />} /> 
          <Route path="/ba" element={<Bacourse />} /> 
          <Route path="/bcom" element={<Bcom />} /> 
          <Route path="/bsc" element={<Bsc />} /> 
          <Route path="/bba" element={<Bba />} /> 

          <Route path="/bvoc-interior-design" element={<BvocInterior />} /> 
          <Route path="/bvoc-graphic-design" element={<BvocGraphic />} /> 
          <Route path="/bvoc-fashion-design" element={<BvocFashion />} /> 

          <Route path="/mvoc-interior-design" element={<MvocInterior />} /> 
          <Route path="/mvoc-graphic-design" element={<MvocGraphic />} /> 
          <Route path="/mvoc-fashion-design" element={<MvocFashion />} /> 

          <Route path="/ma" element={<MaCourse />} /> 
          <Route path="/msc" element={<MscCourse />} /> 
          <Route path="/mcom" element={<McomCourse />} />

          <Route path="/contact-us" element={<ContactUs />} /> 
          <Route path="/placement" element={<Placement />} /> 
          <Route path="/admission" element={<Admission />} /> 
          <Route path="/gallery" element={<Gallery />} /> 
          <Route path="/collaboration" element={<Collaboration />} /> 
          <Route path="/affiliation" element={<Affiliation />} /> 

          <Route path="/architecture-design" element={<ArchitectureDesign />} /> 
          <Route path="/web-design" element={<WebDesign />} /> 
          <Route path="/fashion-design" element={<FashionDesign />} /> 
          <Route path="/graphic-design" element={<GraphicDesign />} /> 
          <Route path="/jewellery-design" element={<JewelleryDesign />} /> 

          <Route path="/login" element={<Login />} /> 

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
