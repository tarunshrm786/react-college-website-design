// import React, { useState } from 'react';
// import '../ModalForm.css'; // Import CSS for styling

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
//     onSubmit(formData); // Submit form data
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
//           <button type="submit" className="submit-btn">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ModalForm;


import React, { useState } from 'react';
import '../ModalForm.css'; // Import CSS for styling
//import { toast } from 'react-toastify'; // Import toast for notifications

function ModalForm({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    city: '',
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData); // Submit form data
    }

    // Set localStorage item to track modal submission
    localStorage.setItem('modalShown', 'true');

    // Show success toast notification
    // toast.success("Form submitted successfully!", {
    //   position: "top-center",
    //   autoClose: 3000,
    // });
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
              name="contact"
              value={formData.contact}
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
          <button  type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
