import axios from 'axios';
import axiosMockAdapter from 'axios-mock-adapter';
import { productEndpoints } from '../api/product.api';
import { userEndpoints } from '../api/user.api';
import productsMock from './products.mock';

function mockInterceptors() {
    const mock = new axiosMockAdapter(axios, { delayResponse: 1500 });

    mock.onPost(userEndpoints.login).reply(200, {
        id: 'xxx',
        name: 'firstUser',
        token: 'asd34csd324fd'
    });

    mock.onGet(productEndpoints.products).reply(200, productsMock);
}

export default mockInterceptors;