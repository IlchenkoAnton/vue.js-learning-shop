<template>
    <h1>Login</h1>
    <h2>{{ loginValue }}</h2>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'Login',
        computed: {
            ...mapGetters('authorization', [
                'loginValue'
            ])
        },
    }
</script>
