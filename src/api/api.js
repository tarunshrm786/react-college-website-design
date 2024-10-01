// import axios from 'axios';

// const BASE_URL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/auth'; // Replace with your API base URL
// // const BASE_URL = 'http://localhost:5000/api/auth'; // Uncomment for local development

// // API Endpoints
// export const API_ENDPOINTS = {
//   STUDENTS: `${BASE_URL}/`,
//   LOGIN: `${BASE_URL}/login`,    // Login endpoint
//   REGISTER: `${BASE_URL}/register`,
//   SIGNUP: `${BASE_URL}/signup`,  // Signup endpoint
//   // Add more endpoints as needed
// };

// // API Functions
// // Function to fetch all students
// export const fetchStudents = async () => {
//   try {
//     const response = await axios.get(API_ENDPOINTS.STUDENTS);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching students:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

// // Function to handle user signup
// export const signup = async (userData) => {
//   try {
//     const response = await axios.post(API_ENDPOINTS.SIGNUP, userData);
//     return response.data;
//   } catch (error) {
//     console.error('Signup error:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

// // Function to handle student login (using studentId and password)
// export const login = async (loginData) => {
//   try {
//     const response = await axios.post(API_ENDPOINTS.LOGIN, loginData);
//     return response.data;
//   } catch (error) {
//     console.error('Login error:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

// import axios from 'axios';

// const BASE_URL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/auth'; // Replace with your API base URL
//  const BASE_URL_M = 'http://localhost:5000/api'; // Uncomment for local development

//  //const BASE_URL_M = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api';

// // API Endpoints
// export const API_ENDPOINTS = {
//   STUDENTS: `${BASE_URL}/`,
//   LOGIN: `${BASE_URL}/login`,    // Login endpoint
//   REGISTER: `${BASE_URL}/register`,
//   SIGNUP: `${BASE_URL}/signup`,  // Signup endpoint
//   MENTORS: `${BASE_URL_M}/mentors`, // Mentor endpoint for CRUD operations
//   GET_MENTORS: `${BASE_URL_M}/mentors`,
//   // Add more endpoints as needed
// };

// // Function to upload a mentor's data including an image
// export const uploadMentor = async (mentorData) => {
//   const formData = new FormData();
  
//   // Append mentor data to the FormData object
//   Object.keys(mentorData).forEach((key) => {
//     formData.append(key, mentorData[key]);
//   });

//   try {
//     const response = await axios.post(API_ENDPOINTS.MENTORS, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data', // Important for file upload
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error uploading mentor:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

// // Function to fetch all mentors
// export const fetchMentors = async () => {
//   try {
//     const response = await axios.get(API_ENDPOINTS.GET_MENTORS);
    
//     // Process the mentor data to convert the buffer to a base64 string
//     const mentors = response.data.map(mentor => {
//       // Convert binary image data to base64 in the browser
//       const base64Image = `data:${mentor.image.contentType};base64,${arrayBufferToBase64(mentor.image.data.data)}`;
//       return { ...mentor, base64Image };
//     });

//     return mentors;
//   } catch (error) {
//     console.error('Error fetching mentors:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

// // Helper function to convert ArrayBuffer to base64 string
// const arrayBufferToBase64 = (buffer) => {
//   let binary = '';
//   const bytes = new Uint8Array(buffer);
//   bytes.forEach((byte) => {
//     binary += String.fromCharCode(byte);
//   });
//   return window.btoa(binary);
// };


// // Function to fetch all students
// export const fetchStudents = async () => {
//   try {
//     const response = await axios.get(API_ENDPOINTS.STUDENTS);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching students:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

// // Function to handle user signup
// export const signup = async (userData) => {
//   try {
//     const response = await axios.post(API_ENDPOINTS.SIGNUP, userData);
//     return response.data;
//   } catch (error) {
//     console.error('Signup error:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

// // Function to handle student login (using studentId and password)
// export const login = async (loginData) => {
//   try {
//     const response = await axios.post(API_ENDPOINTS.LOGIN, loginData);
//     return response.data;
//   } catch (error) {
//     console.error('Login error:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

// import axios from 'axios';

// const BASE_URL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/auth'; // Replace with your API base URL
// //const BASE_URL_M = 'http://localhost:5000/api'; // Uncomment for local development

// const BASE_URL_M = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api'; // Replace with your API base URL


// // API Endpoints
// export const API_ENDPOINTS = {
//   STUDENTS: `${BASE_URL}/`,
//   LOGIN: `${BASE_URL}/login`,    // Login endpoint
//   REGISTER: `${BASE_URL}/register`,
//   SIGNUP: `${BASE_URL}/signup`,  // Signup endpoint
//   MENTORS: `${BASE_URL_M}/mentors`, // Mentor endpoint for CRUD operations
//   GET_MENTORS: `${BASE_URL_M}/mentors`,
// };

// // Function to upload a mentor's data including an image
// export const uploadMentor = async (mentorData) => {
//   const formData = new FormData();
  
//   // Append mentor data to the FormData object
//   Object.keys(mentorData).forEach((key) => {
//     formData.append(key, mentorData[key]);
//   });

//   try {
//     const response = await axios.post(API_ENDPOINTS.MENTORS, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data', // Important for file upload
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error uploading mentor:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

// // Helper function to convert ArrayBuffer to base64 string
// const arrayBufferToBase64 = (buffer) => {
//   let binary = '';
//   const bytes = new Uint8Array(buffer);
//   bytes.forEach((byte) => {
//     binary += String.fromCharCode(byte);
//   });
//   return window.btoa(binary);
// };

// // Function to fetch all mentors
// export const fetchMentors = async () => {
//   try {
//     const response = await axios.get(API_ENDPOINTS.GET_MENTORS);
//     const mentors = response.data;

//     // Fetch images for each mentor
//     const mentorsWithImages = await Promise.all(mentors.map(async (mentor) => {
//       try {
//         const imageResponse = await axios.get(`${API_ENDPOINTS.GET_MENTORS}/${mentor._id}/image`);
//         const base64Image = imageResponse.data 
//           ? `data:${imageResponse.headers['content-type']};base64,${arrayBufferToBase64(imageResponse.data.data)}`
//           : null; // Handle case where image data might not be available

//         return { ...mentor, base64Image };
//       } catch (error) {
//         console.error(`Error fetching image for mentor ${mentor._id}:`, error);
//         return { ...mentor, base64Image: null }; // Return mentor with no image
//       }
//     }));

//     return mentorsWithImages;
//   } catch (error) {
//     console.error('Error fetching mentors:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

// // Function to fetch all students
// export const fetchStudents = async () => {
//   try {
//     const response = await axios.get(API_ENDPOINTS.STUDENTS);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching students:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

// // Function to handle user signup
// export const signup = async (userData) => {
//   try {
//     const response = await axios.post(API_ENDPOINTS.SIGNUP, userData);
//     return response.data;
//   } catch (error) {
//     console.error('Signup error:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

// // Function to handle student login (using studentId and password)
// export const login = async (loginData) => {
//   try {
//     const response = await axios.post(API_ENDPOINTS.LOGIN, loginData);
//     return response.data;
//   } catch (error) {
//     console.error('Login error:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

// import axios from 'axios';

// const BASE_URL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/auth'; // Replace with your API base URL
// const BASE_URL_M = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api'; // Replace with your API base URL

// // API Endpoints
// export const API_ENDPOINTS = {
//   STUDENTS: `${BASE_URL}/`, // Endpoint for students
//   LOGIN: `${BASE_URL}/login`, // Login endpoint
//   REGISTER: `${BASE_URL}/register`, // Register endpoint
//   SIGNUP: `${BASE_URL}/signup`, // Signup endpoint
//   MENTORS: `${BASE_URL_M}/mentors`, // Mentor endpoint for CRUD operations
//   GET_MENTORS: `${BASE_URL_M}/mentors`, // Get mentors endpoint
// };

// // Function to upload a mentor's data including an image
// export const uploadMentor = async (mentorData) => {
//   const formData = new FormData();

//   // Append mentor data to the FormData object
//   Object.keys(mentorData).forEach((key) => {
//     formData.append(key, mentorData[key]);
//   });

//   try {
//     const response = await axios.post(API_ENDPOINTS.MENTORS, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data', // Important for file upload
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error uploading mentor:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

// // Function to fetch all mentors
// export const fetchMentors = async () => {
//   try {
//     const response = await axios.get(API_ENDPOINTS.GET_MENTORS);
//     const mentors = response.data;

//     // Map mentors to include the correct image path
//     const mentorsWithImages = mentors.map((mentor) => ({
//       ...mentor,
//       base64Image: mentor.image ? `${API_ENDPOINTS.GET_MENTORS}/${mentor.image}` : null, // Use the path directly
//     }));

//     return mentorsWithImages; // Return mentors with images
//   } catch (error) {
//     console.error('Error fetching mentors:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

// // Function to fetch all students
// export const fetchStudents = async () => {
//   try {
//     const response = await axios.get(API_ENDPOINTS.STUDENTS);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching students:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

// // Function to handle user signup
// export const signup = async (userData) => {
//   try {
//     const response = await axios.post(API_ENDPOINTS.SIGNUP, userData);
//     return response.data;
//   } catch (error) {
//     console.error('Signup error:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

// // Function to handle student login (using studentId and password)
// export const login = async (loginData) => {
//   try {
//     const response = await axios.post(API_ENDPOINTS.LOGIN, loginData);
//     return response.data;
//   } catch (error) {
//     console.error('Login error:', error);
//     throw error; // Rethrow error to handle it in the component
//   }
// };

import axios from 'axios';

const BASE_URL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/auth'; // Replace with your API base URL
const BASE_URL_M = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api'; // Replace with your API base URL

// API Endpoints
export const API_ENDPOINTS = {
  STUDENTS: `${BASE_URL}/`, // Endpoint for students
  LOGIN: `${BASE_URL}/login`, // Login endpoint
  REGISTER: `${BASE_URL}/register`, // Register endpoint
  SIGNUP: `${BASE_URL}/signup`, // Signup endpoint
  MENTORS: `${BASE_URL_M}/mentors`, // Mentor endpoint for CRUD operations
  GET_MENTORS: `${BASE_URL_M}/mentors`, // Get mentors endpoint
};

// Function to upload a mentor's data including an image
export const uploadMentor = async (mentorData) => {
  const formData = new FormData();

  // Append mentor data to the FormData object
  Object.keys(mentorData).forEach((key) => {
    formData.append(key, mentorData[key]);
  });

  try {
    const response = await axios.post(API_ENDPOINTS.MENTORS, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for file upload
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading mentor:', error);
    throw error; // Rethrow error to handle it in the component
  }
};

export const fetchMentors = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.GET_MENTORS);
    const mentors = response.data;

    const mentorsWithImages = mentors.map((mentor) => {
      // Check if image exists and format it properly
      const base64Image = mentor.image 
        ? `data:${mentor.image.contentType};base64,${mentor.image.data}` 
        : null;

      return {
        ...mentor,
        base64Image, // Attach formatted image data
      };
    });

    return mentorsWithImages; // Return mentors with the formatted images
  } catch (error) {
    console.error('Error fetching mentors:', error);
    throw error;
  }
};



// Function to fetch all students
export const fetchStudents = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.STUDENTS);
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error; // Rethrow error to handle it in the component
  }
};

// Function to handle user signup
export const signup = async (userData) => {
  try {
    const response = await axios.post(API_ENDPOINTS.SIGNUP, userData);
    return response.data;
  } catch (error) {
    console.error('Signup error:', error);
    throw error; // Rethrow error to handle it in the component
  }
};

// Function to handle student login (using studentId and password)
export const login = async (loginData) => {
  try {
    const response = await axios.post(API_ENDPOINTS.LOGIN, loginData);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error; // Rethrow error to handle it in the component
  }
};
