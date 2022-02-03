<template>
    <div class="list-group">
        <div class="list-group-item"
             v-for="product in products"
             :key="product.Id">
            <ShopProduct :product="product"></ShopProduct>
        </div>
    </div>
</template>

<script>
    import ShopProduct from './ShopProduct.vue';

    export default {
        name: 'ShopProducts',
        components: {
            ShopProduct,
        },
        props: [
            'products'
        ]
    };
</script>
