import { createStore } from 'vuex';
import authorization from './modules/authorization';
import products from './modules/products';

const store = createStore({
    strict: true,
    modules: {
        authorization: authorization,
        products: products,
    }
});

export default store;