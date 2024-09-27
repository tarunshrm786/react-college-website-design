// // src/api/api.js

// import axios from 'axios';

// const BASE_URL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/auth'; // Replace with your API base URL

// //const BASE_URL = 'http://localhost:5000/api/auth';

// // API Endpoints
// export const API_ENDPOINTS = {
//   STUDENTS: `${BASE_URL}/`,
//   LOGIN: `${BASE_URL}/login`,
//   REGISTER: `${BASE_URL}/register`,
//   SIGNUP: `${BASE_URL}/signup`, // Added signup endpoint
//   // Add more endpoints as needed
// };

// // API Functions
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

import axios from 'axios';

const BASE_URL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/auth'; // Replace with your API base URL
// const BASE_URL = 'http://localhost:5000/api/auth'; // Uncomment for local development

// API Endpoints
export const API_ENDPOINTS = {
  STUDENTS: `${BASE_URL}/`,
  LOGIN: `${BASE_URL}/login`,    // Login endpoint
  REGISTER: `${BASE_URL}/register`,
  SIGNUP: `${BASE_URL}/signup`,  // Signup endpoint
  // Add more endpoints as needed
};

// API Functions
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
