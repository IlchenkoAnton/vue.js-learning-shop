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
                <template v-if="isAuthorized()">
                    <li class="nav-item me-2">
                        <button
                            type="button"
                            class="btn btn-warning"
                            @click="navigate('/basket')">
                            Карзина
                        </button>
                    </li>
                    <li class="nav-item me-2">
                        <button
                            type="button"
                            class="btn btn-info"
                            @click="navigate('/profile')">
                            Профиль
                        </button>
                    </li>
                    <li class="nav-item me-2">
                        <button
                            type="button"
                            class="btn btn-outline-dark"
                            @click="logout">
                            Выход
                        </button>
                    </li>
                </template>
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
                'token',
            ]),
        },
        methods: {
            isAuthorized() {
                return Boolean(this.token);
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
