import axios from 'axios';

export const productEndpoints = {
    products: '/products',
    categories: '/categories',
};

class ProductApi {
    static getProducts() {
        return axios.get(productEndpoints.products)
            .then(({ data }) => data);
    }

    static getCategories() {
        return axios.get(productEndpoints.categories)
            .then(({ data }) => data);
    }

}

export default ProductApi;