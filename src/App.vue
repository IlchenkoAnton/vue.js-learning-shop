<template>
    <router-view/>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'App',
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

