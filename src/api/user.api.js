import axios from 'axios';

export const userEndpoints = {
    login: '/login'
};

class UserApi {
    static login(login, password) {
        return axios.post(userEndpoints.login, { login, password })
            .then(({ data }) => data);
    }
}

export default UserApi;