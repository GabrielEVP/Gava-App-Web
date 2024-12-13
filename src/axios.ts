import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost/api',
});

const token = localStorage.getItem('Access_Token');
if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default apiClient;