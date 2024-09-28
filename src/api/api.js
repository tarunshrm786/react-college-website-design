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

import axios from 'axios';

const BASE_URL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/auth'; // Replace with your API base URL
// const BASE_URL = 'http://localhost:5000/api/auth'; // Uncomment for local development

 const BASE_URL_M = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api';

// API Endpoints
export const API_ENDPOINTS = {
  STUDENTS: `${BASE_URL}/`,
  LOGIN: `${BASE_URL}/login`,    // Login endpoint
  REGISTER: `${BASE_URL}/register`,
  SIGNUP: `${BASE_URL}/signup`,  // Signup endpoint
  MENTORS: `${BASE_URL_M}/mentors`, // Mentor endpoint for CRUD operations
  // Add more endpoints as needed
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
