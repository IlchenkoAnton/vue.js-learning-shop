import ProductApi from '../../api/product.api';
import { PENDING, READY, ERROR, EMPTY } from '../../common/status.const';
import { STATE_EMPTY, STATE_ERROR, STATE_PENDING, STATE_READY } from '../mutations.const';

const products = {
    namespaced: true,
    state: {
        products: null,
        status: null,
    },
    mutations: {
        [STATE_PENDING] (state) {
            state.status = PENDING;
        },
        [STATE_READY] (state, products) {
            state.status = READY;
            state.products = products;
        },
        [STATE_ERROR] (state) {
            state.status = ERROR;
            state.products = null;
        },
        [STATE_EMPTY] (state) {
            state.status = EMPTY;
            state.products = [];
        }
    },
    actions: {
        async fetchProducts({ commit }) {
            commit(STATE_PENDING);

            try {
                const products = await ProductApi.getProducts();
                if (!products?.length) {
                    commit(STATE_EMPTY);
                }

                commit(STATE_READY, products);
            } catch (error) {
                console.error(error);

                commit(STATE_ERROR);
            }
        }
    },
    getters: {
        status(state) {
            return state.status;
        },
        products(state) {
            return state.products;
        }
    },
};

export default products;