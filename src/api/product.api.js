import axios from 'axios';

export const productEndpoints = {
    products: '/products',
    product: '/products/{id}',
    categories: '/categories',
    category: '/categories/{id}'
};

class ProductApi {
    static getProducts() {
        return axios.get(productEndpoints.products)
            .then(({ data }) => data);
    }

    static getPriduct(productId) {
        const path = ProductApi.resolvePath(
            productEndpoints.product,
            'id',
            productId,
        );

        return axios.get(path)
            .then(({ data }) => data);
    }

    static getCategories() {
        return axios.get(productEndpoints.categories)
            .then(({ data }) => data);
    }

    static getCategory(categoryId) {
        const path = ProductApi.resolvePath(
            productEndpoints.category,
            'id',
            categoryId,
        );

        return axios.get(path)
            .then(({ data }) => data);
    }

    static resolvePath(path, param, value) {
        return path.replace(`{${param}}`, value);
    }
}

export default ProductApi;