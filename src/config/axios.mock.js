import axios from 'axios';
import axiosMockAdapter from 'axios-mock-adapter';

function mockInterceptors() {
    const mock = new axiosMockAdapter(axios, { delayResponse: 1500 });

    mock.onPost('/login').reply(200, {
        id: 'xxx',
        name: 'firstUser',
        token: 'asd34csd324fd'
    });
}

export default mockInterceptors;