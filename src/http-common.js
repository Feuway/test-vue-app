import axios from 'axios';
import { API_URL } from './utils/constants';

export const HTTP = axios.create({
  baseURL: API_URL,
});

export const loadFile = () => {};
