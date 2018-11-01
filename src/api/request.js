import axios from 'axios';
import { API_URL } from '../../.env';

const request = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  transformRequest: [
    (data, headers) => {
      // Add something in data
      return JSON.stringify(data);
    }
  ]
});

request.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    console.log('URL REQUEST AXIOS: ', config.url);
    return config;
  },
  function(error) {
    // Do something with request error
    console.log('ERROR REQUEST AXIOS: ', config.url);
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function(response) {
    console.log('RESPONSE AXIOS: ', response);
    return response;
  },
  function(error) {
    if (error.response) {
      console.log('ERROR RESPONSE AXIOS: ', error);
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      return Promise.reject(new Error(error.response.data.error));
    } else if (error.request) {
      console.log('ERROR RESPONSE AXIOS: ', error);
      // The request was made but no response was received.
      return Promise.reject(
        new Error('Could not connect to server! Please try again later.')
      );
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
      return Promise.reject(
        new Error('Something unexpected happened! Please try again later.')
      );
    }
  }
);

export default request;
