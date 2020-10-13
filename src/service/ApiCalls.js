import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    withCredentials: false, // This is the default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getUsers() {
        return apiClient.get('/users');
    },

    getUser(id) {
        return apiClient.get('/users/' + id);
    },

    getPosts() {
        return apiClient.get('/posts/');
    },

    getTodos() {
        return apiClient.get('/todos/'); // ?_limit=10
    }
};
