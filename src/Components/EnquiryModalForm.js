// import React, { useState } from 'react';
// import '../ModalForm.css'; // Import CSS for styling
// //import { toast } from 'react-toastify'; // Import toast for notifications

// function ModalForm({ isOpen, onClose, onSubmit }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     city: '',
//   });

//   if (!isOpen) {
//     return null; // Return nothing if modal is not open
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (onSubmit) {
//       onSubmit(formData); // Submit form data
//     }

//     // Set localStorage item to track modal submission
//     localStorage.setItem('modalShown', 'true');

//     // Show success toast notification
//     // toast.success("Form submitted successfully!", {
//     //   position: "top-center",
//     //   autoClose: 3000,
//     // });
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <div className="modal-header">
//           <h2>Fill in Your Information</h2>
//           <span className="close-btn" onClick={onClose}>&times;</span>
//         </div>
//         <form className="modal-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Contact No:</label>
//             <input
//               type="text"
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>City:</label>
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button  type="submit" className="submit-btn">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ModalForm;

// import React, { useState } from 'react';
// import '../ModalForm.css'; // Import CSS for styling
// import { Snackbar } from '@mui/material'; // Import Snackbar from Material-UI
// import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress for loader

// function ModalForm({ isOpen, onClose }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contactus: '', // Changed from 'contact' to 'contactus'
//     city: '',
//   });
//   const [loading, setLoading] = useState(false); // State for loading
//   const [snackbarOpen, setSnackbarOpen] = useState(false); // State for Snackbar
//   const [snackbarMessage, setSnackbarMessage] = useState(''); // State for Snackbar message
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // State for Snackbar severity

//   const apiURL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/enquiry';

//   if (!isOpen) {
//     return null; // Return nothing if modal is not open
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Show loader
//     try {
//       const response = await fetch(apiURL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setSnackbarMessage('Enquiry Form submitted successfully!');
//         setSnackbarSeverity('success');
        
//         // Reload the page after a successful submission
//         setTimeout(() => {
//           window.location.reload();
//         }, 3000); // Delay the reload to allow Snackbar to be visible
//       } else {
//         throw new Error('Failed to submit form');
//       }
//     } catch (error) {
//       setSnackbarMessage(error.message);
//       setSnackbarSeverity('error');
//     } finally {
//       setLoading(false); // Hide loader
//       setSnackbarOpen(true); // Show Snackbar
//       localStorage.setItem('modalShown', 'true'); // Set localStorage item to track modal submission
//     }
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false); // Close Snackbar
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <div className="modal-header">
//           <h2>Fill in Your Information</h2>
//           <span className="close-btn" onClick={onClose}>&times;</span>
//         </div>
//         <form className="modal-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Contact No:</label>
//             <input
//               type="text"
//               name="contactus" // Ensure this matches the API format
//               value={formData.contactus} // Updated to use contactus
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>City:</label>
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="submit-btn" disabled={loading}>
//             {loading ? <CircularProgress size={24} /> : 'Submit'}
//           </button>
//         </form>
//       </div>

//       {/* Snackbar Notification */}
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={3000}
//         onClose={handleSnackbarClose}
//         message={snackbarMessage}
//         style={{
//           backgroundColor: snackbarSeverity === 'success' ? '#4caf50' : '#f44336',
//           color: '#fff',
//         }}
//         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//       />
//     </div>
//   );
// }

// export default ModalForm;

import React, { useState } from 'react';
import '../ModalForm.css'; // Import CSS for styling
import { Snackbar } from '@mui/material'; // Import Snackbar from Material-UI
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress for loader

function ModalForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactus: '',
    city: '',
  });
  const [loading, setLoading] = useState(false); // State for loading
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(''); // State for Snackbar message
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // State for Snackbar severity

  const apiURL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/enquiry';

  if (!isOpen) {
    return null; // Return nothing if modal is not open
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, email, contactus, city } = formData;

    // Validate fields
    if (!name || !email || !contactus || !city) {
      setSnackbarMessage('All fields are required!');
      setSnackbarSeverity('error');
      return false;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setSnackbarMessage('Please enter a valid email address!');
      setSnackbarSeverity('error');
      return false;
    }

    // Validate contact number (for example, it should be 10 digits)
    const contactPattern = /^\d{10}$/;
    if (!contactPattern.test(contactus)) {
      setSnackbarMessage('Contact number must be 10 digits!');
      setSnackbarSeverity('error');
      return false;
    }

    return true; // Validation passed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submitting
    if (!validateForm()) {
      setSnackbarOpen(true);
      return; // Stop form submission if validation fails
    }

    setLoading(true); // Show loader
    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSnackbarMessage('Enquiry Form submitted successfully!');
        setSnackbarSeverity('success');
        
        // Reload the page after a successful submission
        setTimeout(() => {
          window.location.reload();
        }, 3000); // Delay the reload to allow Snackbar to be visible
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSnackbarMessage(error.message);
      setSnackbarSeverity('error');
    } finally {
      setLoading(false); // Hide loader
      setSnackbarOpen(true); // Show Snackbar
      localStorage.setItem('modalShown', 'true'); // Set localStorage item to track modal submission
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false); // Close Snackbar
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Fill in Your Information</h2>
          <span className="close-btn" onClick={onClose}>&times;</span>
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact No:</label>
            <input
              type="text"
              name="contactus" // Ensure this matches the API format
              value={formData.contactus} // Updated to use contactus
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Submit'}
          </button>
        </form>
      </div>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        style={{
          backgroundColor: snackbarSeverity === 'success' ? '#4caf50' : '#f44336',
          color: '#fff',
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </div>
  );
}

export default ModalForm;
