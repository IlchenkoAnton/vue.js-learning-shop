<template>
    <div class="list-group">
        <div class="list-group-item"
             v-for="product in products"
             :key="product.Id">
            {{ product.Id }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ShopProducts',
        props: [
            'products'
        ]
    };
</script>
