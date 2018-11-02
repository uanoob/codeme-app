import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://incode-blog-internship.herokuapp.com',
  baseURL: 'https://cors-anywhere.herokuapp.com/https://incode-blog-internship.herokuapp.com',
  headers: !localStorage.getItem('token')
    ? {}
    : { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

export default axiosInstance;
