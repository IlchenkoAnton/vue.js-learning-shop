import axios from 'axios';

export const productEndpoints = {
    products: '/products',
};

class ProductApi {
    static getProducts() {
        return axios.get(productEndpoints.products);
    }
}

export default ProductApi;