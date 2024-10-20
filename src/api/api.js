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
  TEAMS: `${BASE_URL_M}/teams`, // Team endpoint for CRUD operations
  GET_TEAMS: `${BASE_URL_M}/teams`, // Get teams endpoint
  ABOUT_US: `${BASE_URL_M}/aboutus`, // About Us endpoint for CRUD operations
  GET_ABOUT_US: `${BASE_URL_M}/aboutus/aboutusbanner`, // Fetch About Us data
  AFFILIATIONS: `${BASE_URL_M}/affiliations`, // CRUD operations for affiliations
  GET_AFFILIATIONS: `${BASE_URL_M}/affiliations`, // Fetch affiliations endpoint
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

// Function to fetch all mentors
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

// Function to upload a team's data including an image
export const uploadTeam = async (teamData) => {
  const formData = new FormData();

  // Append team data to the FormData object
  Object.keys(teamData).forEach((key) => {
    formData.append(key, teamData[key]);
  });

  try {
    const response = await axios.post(API_ENDPOINTS.TEAMS, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for file upload
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading team:', error);
    throw error; // Rethrow error to handle it in the component
  }
};

// Function to fetch all teams
export const fetchTeams = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.GET_TEAMS);
    const teams = response.data;

    const teamsWithImages = teams.map((team) => {
      // Check if image exists and format it properly
      const base64Image = team.image
        ? `data:${team.image.contentType};base64,${team.image.data}`
        : null;

      return {
        ...team,
        base64Image, // Attach formatted image data
      };
    });

    return teamsWithImages; // Return teams with the formatted images
  } catch (error) {
    console.error('Error fetching teams:', error);
    throw error;
  }
};

// Function to delete a team by ID
export const deleteTeam = async (teamId) => {
  try {
    const response = await axios.delete(`${API_ENDPOINTS.GET_TEAMS}/${teamId}`);
    return response.data; // Return the response from the server
  } catch (error) {
    console.error('Error deleting team:', error);
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


// // Function to fetch the About Us data
// export const fetchAboutUs = async () => {
//   try {
//     const response = await axios.get(API_ENDPOINTS.GET_ABOUT_US);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching About Us data:', error);
//     throw error;
//   }
// };
// Function to fetch About Us banner data
export const fetchAboutUs = async () => {
  try {
    const response = await fetch(API_ENDPOINTS.GET_ABOUT_US);

    if (!response.ok) {
      throw new Error('Failed to fetch banner');
    }

    const data = await response.json(); // Convert response to JSON
    console.log('Fetched banner data:', data); // Log the fetched data
    return data; // Return the data object
  } catch (error) {
    console.error('Error fetching About Us data:', error);
    throw error;
  }
};

// Function to upload/update About Us data
export const uploadAboutUs = async (aboutUsData) => {
  const formData = new FormData();

  // Append about us data to the FormData object
  Object.keys(aboutUsData).forEach((key) => {
    formData.append(key, aboutUsData[key]);
  });

  try {
    const response = await axios.post(API_ENDPOINTS.ABOUT_US, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for file upload
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading About Us data:', error);
    throw error;
  }
};

// Function to delete About Us data
export const deleteAboutUs = async (aboutUsId) => {
  try {
    const response = await axios.delete(`${API_ENDPOINTS.GET_ABOUT_US}/${aboutUsId}`);
    return response.data; // Return the response from the server
  } catch (error) {
    console.error('Error deleting About Us data:', error);
    throw error;
  }
};



// Function to upload an affiliation's data including an image
export const uploadAffiliation = async (affiliationData) => {
  const formData = new FormData();

  Object.keys(affiliationData).forEach((key) => {
    formData.append(key, affiliationData[key]);
  });

  try {
    const response = await axios.post(API_ENDPOINTS.AFFILIATIONS, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading affiliation:', error);
    throw error;
  }
};

// Function to fetch all affiliations
export const fetchAffiliations = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.GET_AFFILIATIONS);
    const affiliations = response.data;

    const affiliationsWithImages = affiliations.map((affiliation) => {
      const base64Image = affiliation.image
        ? `data:${affiliation.image.contentType};base64,${affiliation.image.data}`
        : null;

      return {
        ...affiliation,
        base64Image,
      };
    });

    return affiliationsWithImages;
  } catch (error) {
    console.error('Error fetching affiliations:', error);
    throw error;
  }
};

// Function to delete an affiliation by ID
export const deleteAffiliation = async (affiliationId) => {
  try {
    const response = await axios.delete(`${API_ENDPOINTS.GET_AFFILIATIONS}/${affiliationId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting affiliation:', error);
    throw error;
  }
};