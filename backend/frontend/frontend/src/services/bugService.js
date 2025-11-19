// frontend/src/services/bugService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/bugs/';

const getBugs = () => {
  return axios.get(API_URL);
};

const createBug = (bugData) => {
  return axios.post(API_URL, bugData);
};

export default {
  getBugs,
  createBug,
};
