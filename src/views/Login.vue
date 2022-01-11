<template>
    <h1>Login</h1>
    <h2>{{ user + '' }}</h2>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'Login',
        computed: {
            ...mapGetters('authorization', [
                'user'
            ])
        },
    }
</script>
