import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const register = (username, password, role) => 
  axios.post(`${API_URL}/auth/register`, { username, password, role });

export const login = (username, password) => 
  axios.post(`${API_URL}/auth/login`, { username, password });
