import ProductApi from '../../api/product.api';
import { PENDING, READY, ERROR, EMPTY } from '../../common/status.const';
import Product from '../../core/product';
import Category from '../../core/category';
import {
    STATE_PRODUCTS_PENDING,
    STATE_PRODUCTS_READY,
    STATE_PRODUCTS_ERROR,
    STATE_PRODUCTS_EMPTY,
    STATE_PRODUCT_PENDING,
    STATE_PRODUCT_READY,
    STATE_PRODUCT_ERROR,
    STATE_PRODUCT_EMPTY,
} from '../mutations.const';

const products = {
    namespaced: true,
    state: {
        products: {
            data: null,
            status: null,
            categories: null,
        },
        product: {
            data: null,
            status: null,
            category: null,
        },
    },
    mutations: {
        [STATE_PRODUCTS_PENDING] (state) {
            state.products.status = PENDING;
        },
        [STATE_PRODUCTS_READY] (state, { products, categories }) {
            state.products.status = READY;
            state.products.data = products;
            state.products.categories = categories;
        },
        [STATE_PRODUCTS_ERROR] (state) {
            state.products.status = ERROR;
            state.products.data = null;
            state.products.categories = null;
        },
        [STATE_PRODUCTS_EMPTY] (state) {
            state.products.status = EMPTY;
            state.products.data = [];
            state.products.categories = [];
        },

        [STATE_PRODUCT_PENDING] (state) {
            state.product.status = PENDING;
        },
        [STATE_PRODUCT_READY] (state, { product, category }) {
            state.product.status = READY;
            state.product.data = product;
            state.product.category = category;
        },
        [STATE_PRODUCT_ERROR] (state) {
            state.product.status = ERROR;
            state.product.data = null;
            state.product.category = null;
        },
        [STATE_PRODUCT_EMPTY] (state) {
            state.product.status = EMPTY;
            state.product.data = null;
            state.product.category = null;
        },
    },
    actions: {
        async fetchProducts({ commit }) {
            commit(STATE_PRODUCTS_PENDING);

            try {
                const products = await ProductApi.getProducts();
                const categories = await ProductApi.getCategories();
                
                if (!products?.length) {
                    commit(STATE_PRODUCTS_EMPTY);
                }

                const productList = products.map((product) => {
                    return new Product(
                        product.id,
                        product.shortName,
                        product.name,
                        product.description,
                        product.categoryId,
                        null,
                        product.images
                    );
                });
                const categoryList = categories.map((category) => {
                    return new Category(category.id, category.name);
                });

                commit(
                    STATE_PRODUCTS_READY,
                    { 
                        products: productList,
                        categories: categoryList,
                    }
                );
            } catch (error) {
                console.error(error);

                commit(STATE_PRODUCTS_ERROR);
            }
        },
        async fetchProduct({ commit }, { productId }) {
            commit(STATE_PRODUCT_PENDING);

            try {
                const product = await ProductApi.getPriduct(productId);
                const category = await ProductApi.getCategory(product.categoryId);

                if (!product || !category) {
                    commit(STATE_PRODUCT_EMPTY);
                }

                commit(
                    STATE_PRODUCT_READY,
                    { 
                        product: new Product(
                            product.id,
                            product.shortName,
                            product.name,
                            product.description,
                            product.categoryId,
                            null,
                            product.images
                        ),
                        category: new Category(category.id, category.name),
                    }
                );
            } catch (error) {
                console.error(error);

                commit(STATE_PRODUCT_ERROR);
            }
        }
    },
    getters: {
        status(state) {
            return state.products.status;
        },
        products(state) {
            return state.products.data;
        },
        categories(state) {
            return state.products.categories;
        },
        productInfo(state) {
            return state.product.data;
        },
        productInfoStatus(state) {
            return state.product.status;
        }
    },
};

export default products;