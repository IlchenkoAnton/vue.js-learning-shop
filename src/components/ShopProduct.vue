<template>
    <div class="shop-product d-flex justify-content-between align-items-center p-2">
        <div class="me-2">
            <img class="img-thumbnail">
        </div>
        <div class="me-auto">
            <div>
                {{ product.ShortName }}
            </div>
            <div>
                {{ product.CategoryId }}
            </div>
        </div>
        <div class="ms-auto d-flex flex-column text-end">
            <h4>
                <span class="badge bg-success">Цена</span>
            </h4>
            <div class="d-flex">
                <div class="link-info">Подробнее...</div>
                <button type="button" class="btn btn-warning">
                    Добавить в корзину
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ShopProduct',
        props: [
            'product'
        ],
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
