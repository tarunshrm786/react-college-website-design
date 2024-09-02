// src/App.js
import React from 'react';
import './App.css';
import Banner from './Components/banner';
import Aboutus from './Components/about_us';
import Director from './Components/directors';
import Services from './Components/services';

function Home() {
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

export default Home;