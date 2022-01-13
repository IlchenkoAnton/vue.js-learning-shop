<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="row">
                    <div class="col">
                        <Header></Header>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <router-view></router-view>
                    </div>
                </div>
                <!-- <div class="row">
                    <div class="col">
                        Подвал
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import Header from './components/Header.vue';

    export default {
        name: 'App',
        components: {
            Header,
        },
        methods: {
            ...mapActions('authorization', [
                'login'
            ])
        },
        created() {
            console.log('[this]: ', this);

            this.login({
                type: 'login',
            });
        }
    }
</script>

