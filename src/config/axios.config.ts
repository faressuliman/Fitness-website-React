import axios from "axios";
// هنا زي ده انا ثابت الجزء ال ثابت من اللينك{envirinment

export const axiosInstance = axios.create({
    baseURL: "http://localhost:1337/api",
    timeout: 10000,
});

export const axiosInstanceExercise = axios.create({
    baseURL: "https://exercisedb.p.rapidapi.com",
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
    timeout: 10000,
});

// Log the current API key (masked)
const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
if (!apiKey) {
  console.error('No RapidAPI key found in environment variables!');
} else {
  const maskedKey = apiKey.substring(0, 4) + '...' + apiKey.substring(apiKey.length - 4);
  console.log('Using RapidAPI key:', maskedKey);
}

// Add request interceptor for logging
axiosInstanceExercise.interceptors.request.use(
  (config) => {
    console.log('Making request:', {
      method: config.method,
      url: config.url,
      headers: {
        'X-RapidAPI-Host': config.headers['X-RapidAPI-Host'],
        'X-RapidAPI-Key': '****' // masked for security
      }
    });
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
axiosInstanceExercise.interceptors.response.use(
  (response) => {
    console.log('Response received:', {
      status: response.status,
      url: response.config.url,
      data: response.data ? 'Data received' : 'No data'
    });
    return response;
  },
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('API Error Response:', {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
        url: error.config.url
      });
    } else if (error.request) {
      // The request was made but no response was received
      console.error('API No Response:', {
        request: error.request,
        url: error.config?.url
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('API Request Setup Error:', {
        message: error.message,
        url: error.config?.url
      });
    }
    return Promise.reject(error);
  }
);
