import ProductApi from '../../api/product.api';
import { PENDING, READY, ERROR, EMPTY } from '../../common/status.const';
import Product from '../../core/product';
import Category from '../../core/category';
import { STATE_EMPTY, STATE_ERROR, STATE_PENDING, STATE_READY } from '../mutations.const';

const products = {
    namespaced: true,
    state: {
        products: null,
        status: null,
        categories: null,
    },
    mutations: {
        [STATE_PENDING] (state) {
            state.status = PENDING;
        },
        [STATE_READY] (state, { products, categories }) {
            state.status = READY;
            state.products = products;
            state.categories = categories;
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
                const categories = await ProductApi.getCategories();
                
                if (!products?.length) {
                    commit(STATE_EMPTY);
                }

                const productList = products.map((product) => {
                    return new Product(
                        product.id,
                        product.shortName,
                        product.name,
                        product.description,
                        product.categoryId
                    );
                });
                const categoryList = categories.map((category) => {
                    return new Category(category.id, category.name);
                });

                commit(
                    STATE_READY,
                    { 
                        products: productList,
                        categories: categoryList,
                    }
                );
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
        },
        categories(state) {
            return state.categories;
        }
    },
};

export default products;