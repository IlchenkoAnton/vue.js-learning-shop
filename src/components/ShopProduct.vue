<template>
    <div class="shop-product d-flex justify-content-between align-items-center p-2">
        <div class="me-2">
            <img class="img-thumbnail">
        </div>
        <div class="me-auto">
            <h1 class="display-5">
                {{ product.ShortName }}
            </h1>
            <h1 class="display-6 text-primary">
                {{ getCategoryName(product.CategoryId) }}
            </h1>
        </div>
        <div class="ms-auto d-flex flex-column text-end">
            <h4>
                <span class="badge bg-success">Цена</span>
            </h4>
            <div class="d-flex">
                <div class="link-info">
                    Подробнее...
                </div>
                <button type="button" class="btn btn-warning">
                    Добавить в корзину
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'ShopProduct',
        props: [
            'product'
        ],
        computed: {
            ...mapGetters('products', [
                'categories',
            ]),
        },
        methods: {
            getCategoryName(categoryId) {
                // TODO Оптимизировать через Map
                const category = this.categories.find(category => category.Id === categoryId);

                return category?.Name || 'Прочее';
            }
        }
    };
</script>

<style scoped>
    .shop-product {
        height: 150px;
    }

    img {
        width: 150px;
    }
</style>
