import axios from 'axios';
import axiosMockAdapter from 'axios-mock-adapter';
import { productEndpoints } from '../api/product.api';
import { userEndpoints } from '../api/user.api';
import productsMock from './products.mock';
import categoriesMock from './categories.mock';

function mockInterceptors() {
    const mock = new axiosMockAdapter(axios, { delayResponse: 1500 });

    mock.onPost(userEndpoints.login).reply(200, {
        id: 'xxx',
        name: 'firstUser',
        token: 'asd34csd324fd'
    });

    mock.onGet(productEndpoints.products).reply(200, productsMock);

    mock.onGet(productEndpoints.categories).reply(200, categoriesMock);

    mock.onGet(/^\/products\//).reply((config) => {
        const productId = config.url.split('/')[2];
        const product = productsMock.find(p => p.id === productId);

        if (!product) {
            return [ 404 ];
        }

        return [ 200, product ];
    });

    mock.onGet(/^\/categories\//).reply((config) => {
        const categoryId = config.url.split('/')[2];
        const category = categoriesMock.find(c => c.id === categoryId);

        if (!category) {
            return [ 404 ];
        }

        return [ 200, category ];
    });
}

export default mockInterceptors;