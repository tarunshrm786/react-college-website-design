// src/layouts/PublicLayout.js
import React from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
//import ScrollIcon from '../Components/scrollIcon'; // Import ScrollIcon if needed

const PublicLayout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      {/* <ScrollIcon /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
