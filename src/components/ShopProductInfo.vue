<template>
    <template v-if="productInfoStatus === 'pending'">
        <div class="d-flex align-items-center">
            <strong>Загрузка...</strong>
            <div class="spinner-border ms-auto"></div>
        </div>
    </template>
    <template v-else-if="productInfoStatus === 'ready'">
        <div class="row">
            <div class="col-10">
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <button type="button" class="btn btn-link">
                                Бренд
                            </button>
                        </li>
                        <li class="breadcrumb-item">
                            <button type="button" class="btn btn-link">
                                {{ productInfo.CategoryId }}
                            </button>
                        </li>
                    </ol>
                </nav>

                <p class="h2">{{ productInfo.ShortName }}</p>
                <p class="display-6">{{ productInfo.Name }}</p>
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-primary">
                    Цена <span class="badge bg-danger">4</span>
                </button>
                <button type="button" class="btn btn-warning">В корзина</button>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div>
                    <img v-for="(image, index) in productInfo.Images"
                         :key="index"
                         :src="require('../assets/product-images/' + image)"
                         class="rounded">
                </div>
                <div>
                    <p class="lead">{{ productInfo.Description }}</p>
                </div>
            </div>
        </div>
    </template>
    <template v-else-if="productInfoStatus === 'error'">
        ERROR
    </template>
    <template v-else-if="productInfoStatus === 'empty'">
        EMPTY
    </template>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'ShopProductInfo',
        computed: {
            ...mapGetters('products', [
                'productInfoStatus',
                'productInfo',
            ]),
        },
        mounted() {
            const productId = this.$route.params.productId;

            if (!this.productInfo || this.productInfo.Id !== productId) {
                this.$store.dispatch('products/fetchProduct', { productId });
            }
        }
    }
</script>

<style scoped>

</style>