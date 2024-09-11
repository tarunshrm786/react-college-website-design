// src/App.js
import React from 'react';
import './App.css';
import Banner from './Components/banner';
import Aboutus from './Components/about_us';
import Director from './Components/directors';
import Services from './Components/services';
import Collaboration from './Components/collaboration';
import Affiliation from './Components/affiliation';
import ScrollIcon from './Components/scrollIcon';

function Home() {
  return (
    <div className="App">
      {/* <Header />  */}
      <Banner /> 
      <Aboutus />
      <Services />
      <Director />
      <Collaboration />
      <Affiliation />
      {/* <Footer /> */}
      <ScrollIcon /> 
    </div>
  );
}

export default Home;