import { createRouter, createWebHistory } from 'vue-router';
import LocalStorageUtils from '../utils/local-storage.utils';

const routes = [
    {
        path: '/',
        redirect: '/products'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/ShopLogin.vue'),
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import('../views/Products.vue'),
    },
    {
        path: '/products/:productId',
        name: 'Product',
        component: () => import('../views/Product.vue'),
    },
    {
        path: '/basket',
        name: 'Basket',
        component: () => import('../views/Basket.vue'),
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue'),
    },
    {
        path: '/management',
        name: 'Management',
        component: () => import('../views/Management.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to) => {
    const user = LocalStorageUtils.getUser();

    if (to.name === 'Login') {
        if (user) {
            return '/';
        }
        
        return true;
    }

    if (!user) {
        return '/login';
    }

    return true;
  })

export default router;
