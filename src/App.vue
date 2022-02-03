<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="row">
                    <div class="col">
                        <ShopHeader></ShopHeader>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import ShopHeader from './components/ShopHeader.vue';

    export default {
        name: 'App',
        components: {
            ShopHeader,
        },
        methods: {
            ...mapActions('authorization', [
                'login'
            ])
        },
    }
</script>

