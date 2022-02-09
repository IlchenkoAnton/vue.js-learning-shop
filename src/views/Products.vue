<template>
    <div class="row">
        <h1>Список продуктов</h1>
    </div>
    <template v-if="status === 'pending'">
        <div class="d-flex align-items-center">
            <strong>Загрузка...</strong>
            <div class="spinner-border ms-auto"></div>
        </div>
    </template>
    <template v-else-if="status === 'ready'">
        <div class="row">
            <ShopProductsFilter></ShopProductsFilter>
        </div>
        <div class="row">
            <div class="col">
                <ShopProducts :products="products"></ShopProducts>
            </div>
        </div>
    </template>
    <template v-else-if="status === 'error'">
        ERROR
    </template>
    <template v-else-if="status === 'empty'">
        EMPTY
    </template>
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
            if (!this.products?.length) {
                this.$store.dispatch('products/fetchProducts');
            }
        }
    }
</script>
