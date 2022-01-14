<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <button
                type="button"
                class="btn btn-primary"
                @click="navigate('/')">
                Магазин
            </button>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item" v-if="user">
                    <button
                        type="button"
                        class="btn btn-outline-dark"
                        @click="logout">
                        Выход
                    </button>
                </li>
                <li class="nav-item" v-else>
                    <button
                        type="button"
                        class="btn btn-outline-dark"
                        @click="navigate('/login')">
                        Войти
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex';
    import LocalStorageUtils from '../utils/local-storage.utils';

    export default {
        name: 'ShopHeader',
        computed: {
            ...mapGetters('authorization', [
                'user',
            ])
        },
        methods: {
            isAuthorized() {
                debugger;
                return Boolean(this.user);
            },
            navigate(path) {
               this.$router.push(path); 
            },
            logout() {
                this.$store.dispatch('authorization/logout');
                LocalStorageUtils.clearUser();

                this.$router.push('/login');
            }
        }
    }
</script>
