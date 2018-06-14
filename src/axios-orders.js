import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-project-6724a.firebaseio.com/'
});

export default instance;