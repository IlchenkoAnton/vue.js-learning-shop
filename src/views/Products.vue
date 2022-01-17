<template>
    <h1>Список продуктов</h1>
    <p class="lead">
        Я тут запилю много много много много много много много много красивешных продуктов
    </p>
    <div>
        {{ status }}
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'Products',
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
