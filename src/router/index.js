import { createRouter, createWebHistory } from 'vue-router'

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

router.beforeEach((to, from) => {
    console.log('to: ', to);
    console.log('from: ', from);

    return true;
  })

export default router;
