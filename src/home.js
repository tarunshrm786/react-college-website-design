// src/App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header'; // Import the Header component
import Banner from './Components/banner';
import Aboutus from './Components/about_us';
import Director from './Components/directors';
import Services from './Components/services';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      {/* <Header />  */}
      <Banner /> 
      <Aboutus />
      <Services />
      <Director />
      {/* <Footer /> */}
    </div>
  );
}

export default App;