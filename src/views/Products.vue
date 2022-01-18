<template>
    <div class="row">
        <h1>Список продуктов</h1>
    </div>
    <div class="row">
        <ShopProductsFilter></ShopProductsFilter>
    </div>
    <div class="row">
        <div class="col">
            <ShopProducts :products="products"></ShopProducts>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import ShopProducts from '../components/ShopProducts.vue';
    import ShopProductsFilter from '../components/ShopProductsFilter.vue';

    export default {
        name: 'Products',
        components: {
            ShopProductsFilter,
            ShopProducts,
        },
        computed: {
            ...mapGetters('products', [
                'status',
                'products',
            ]),
        },
        mounted() {
            this.$store.dispatch('products/fetchProducts');
        }
    }
</script>
