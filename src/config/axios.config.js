import axios from 'axios';

function initAxios() {
    axios.defaults.baseURL = 'https://api.learning-shop.com';
}

export default initAxios;