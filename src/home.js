// // src/App.js
// import React from 'react';
// import './App.css';
// import Banner from './Components/banner';
// import Aboutus from './Components/about_us';
// import Director from './Components/directors';
// import Services from './Components/services';
// import Collaboration from './Components/collaboration';
// import Affiliation from './Components/affiliation';
// import ScrollIcon from './Components/scrollIcon';

// function Home() {
//   return (
//     <div className="App">
//       {/* <Header />  */}
//       <Banner /> 
//       <Aboutus />
//       <Services />
//       <Director />
//       <Collaboration />
//       <Affiliation />
//       {/* <Footer /> */}
//       <ScrollIcon /> 
//     </div>
//   );
// }

// export default Home;

// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
// import Banner from './Components/banner';
// import Aboutus from './Components/about_us';
// import Director from './Components/directors';
// import Services from './Components/services';
// import Collaboration from './Components/collaboration';
// import Affiliation from './Components/affiliation';
// import ScrollIcon from './Components/scrollIcon';
// import ModalForm from './Components/EnquiryModalForm'; // Import the modal

// function Home() {
//   const [isModalOpen, setIsModalOpen] = useState(true); // Modal visibility state
//   const [closeCount, setCloseCount] = useState(0); // Count for modal close without submit

//   // Retrieve close count from localStorage on component mount
//   useEffect(() => {
//     const storedCloseCount = localStorage.getItem('closeCount');
//     if (storedCloseCount) {
//       setCloseCount(parseInt(storedCloseCount));
//     }
//   }, []);

  // const handleModalSubmit = (formData) => {
  //   setIsModalOpen(false); // Close modal on successful submission
  //   console.log("Form submitted with data:", formData); // Display form data in console
  
  //   // Show success toast notification
  //   toast.success("Form submitted successfully!", {
  //     position: "top-center", // Use string directly instead of toast.POSITION.TOP_CENTER
  //     autoClose: 3000 // Close the toast after 3 seconds
  //   });
  // };
  

//   const handleModalClose = () => {
//     setIsModalOpen(false); // Close modal without submission
//     const newCloseCount = closeCount + 1;
//     setCloseCount(newCloseCount); // Increment close count
//     localStorage.setItem('closeCount', newCloseCount); // Store close count in localStorage
//     console.log(`Modal closed without form submission. Total closes: ${newCloseCount}`);
//   };

//   return (
//     <div className="App">
//       {/* Modal Component */}
//       <ModalForm
//         isOpen={isModalOpen}
//         onClose={handleModalClose}
//         onSubmit={handleModalSubmit}
//       />

//       {/* Toast notification container */}
//       <ToastContainer />

//       {/* Main Content */}
//       <Banner />
//       <Aboutus />
//       <Services />
//       <Director />
//       <Collaboration />
//       <Affiliation />
//       {/* <ScrollIcon /> */}
//     </div>
//   );
// }

// export default Home;

// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import ModalForm from './Components/EnquiryModalForm';
// import Banner from './Components/banner';
// import Aboutus from './Components/about_us';
// import Director from './Components/directors';
// import Services from './Components/services';
// import Collaboration from './Components/collaboration';
// import Affiliation from './Components/affiliation';
// // import ScrollIcon from './Components/scrollIcon';

// function Home() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     // Check if the modal has been shown before
//     const hasModalBeenShown = localStorage.getItem('modalShown');
//     if (!hasModalBeenShown) {
//       setIsModalOpen(true);
//     }
//   }, []);

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     // Optionally clear localStorage item if you want to reset the state in future sessions
//     // localStorage.removeItem('modalShown');
//   };

//   // const handleModalSubmit = (formData) => {
//   //   console.log("Form submitted with data:", formData); // Display form data in console
//   //   setIsModalOpen(false); // Close modal on successful submission
//   // };

//   const handleModalSubmit = (formData) => {
//     setIsModalOpen(false); // Close modal on successful submission
//     console.log("Form submitted with data:", formData); // Display form data in console
  
//     // Show success toast notification
//     toast.success("Form submitted successfully!", {
//       position: "top-center", // Use string directly instead of toast.POSITION.TOP_CENTER
//       autoClose: 3000 // Close the toast after 3 seconds
//     });
//   };

//   return (
//     <div className="App">
//       <Banner />
//       <Aboutus />
//       <Services />
//       <Director />
//       <Collaboration />
//       <Affiliation />
//       {/* <ScrollIcon /> */}

//       {/* Modal Form */}
//       <ModalForm
//         isOpen={isModalOpen}
//         onClose={handleModalClose}
//         onSubmit={handleModalSubmit}
//       />
//       <ToastContainer />
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ModalForm from './Components/EnquiryModalForm';
import Banner from './Components/banner';
import Aboutus from './Components/about_us';
import Director from './Components/directors';
import Services from './Components/services';
import Collaboration from './Components/collaboration';
import Affiliation from './Components/affiliation';
// import ScrollIcon from './Components/scrollIcon';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if the modal has been shown before
    const hasModalBeenShown = localStorage.getItem('modalShown');
    if (!hasModalBeenShown) {
      setIsModalOpen(true);
    }
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (formData) => {
    setIsModalOpen(false); // Close modal on successful submission
    console.log("Form submitted with data:", formData); // Display form data in console
  
    // Show success toast notification
    toast.success("Form submitted successfully!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <div className="App">
      <Banner />
      <Aboutus />
      <Services />
      <Director />
      <Collaboration />
      <Affiliation />
      {/* <ScrollIcon /> */}

      {/* Modal Form */}
      <ModalForm
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
      <ToastContainer />
    </div>
  );
}

export default Home;

