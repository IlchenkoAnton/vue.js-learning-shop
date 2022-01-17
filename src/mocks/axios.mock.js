import axios from 'axios';
import axiosMockAdapter from 'axios-mock-adapter';
import { userEndpoints } from '../api/user.api';

function mockInterceptors() {
    const mock = new axiosMockAdapter(axios, { delayResponse: 1500 });

    mock.onPost(userEndpoints.login).reply(200, {
        id: 'xxx',
        name: 'firstUser',
        token: 'asd34csd324fd'
    });
}

export default mockInterceptors;