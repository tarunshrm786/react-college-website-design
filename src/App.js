// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home'; // Import Home page
import Aboutus from './Components/aboutus'; 
import FoundingMembers from './Components/founding-members'; 
import Staff from './Components/staff'; 
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
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
