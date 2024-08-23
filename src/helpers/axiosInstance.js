import axios from 'axios';
import { COINGECO_API_URL } from './constant';
const axiosInstance = axios.create({
    baseURL: COINGECO_API_URL,
});

export default axiosInstance;