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

import MaCourse from './Components/pgcourses/ma'; 
import McomCourse from './Components/pgcourses/mcom'; 
import MscCourse from './Components/pgcourses/msc'; 

import ContactUs from './Components/contact-us'; 
import Placement from './Components/placement'; 
import Admission from './Components/admission'; 
import Gallery from './Components/gallery'; 
import Footer from './Components/footer'; 
import Header from './Components/header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
     
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

          <Route path="/ma" element={<MaCourse />} /> 
          <Route path="/msc" element={<MscCourse />} /> 
          <Route path="/mcom" element={<McomCourse />} />

          <Route path="/contact-us" element={<ContactUs />} /> 
          <Route path="/placement" element={<Placement />} /> 
          <Route path="/admission" element={<Admission />} /> 
          <Route path="/gallery" element={<Gallery />} /> 

        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
