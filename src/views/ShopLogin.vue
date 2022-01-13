<template>
    <div class="shop-login d-flex justify-content-center align-items-center">
        <form name="loginForm" novalidate @submit.prevent="onSubmit">
            <fieldset>
                <legend>Авторизация</legend>
                <div class="mb-3">
                    <label class="form-label">Адрес эл.почты</label>
                    <input
                        placeholder="Введите e-mail"
                        type="email"
                        class="form-control"
                        name="login"
                        v-model="login">
                </div>
                <div class="mb-3">
                    <label class="form-label">Пароль</label>
                    <input
                        placeholder="Введите пароль"
                        type="password"
                        class="form-control"
                        name="password"
                        v-model="password">
                </div>
                <div class="mb-3">
                    <div class="alert alert-danger" v-if="errorMessage">
                        {{ errorMessage }}
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Войти</button>
            </fieldset>
        </form>
    </div>
</template>

<style scoped>
    .shop-login {
        height: 90vh;
        margin-top: -40px;
    }

    form {
        width: 350px;
    }
</style>

<script>
    import { mapGetters } from 'vuex';
    import axios from 'axios';
    import LocalStorageUtils from '../core/local-storage.utils';
    import User from '../core/user';
    import authorizationErrors from '../common/authorization.errors';

    export default {
        name: 'ShopLogin',
        data() {
            return {
                login: '',
                password: '',
                errorMessage: '',
            };
        },
        computed: {
            ...mapGetters('authorization', [
                'user'
            ]),
        },
        methods: {
            onSubmit() {
                this.$_login(this.login, this.password)
                    .then((response) => {
                        if (response) {
                            // redirect
                        }
                    });
            },
            async $_login(login, password) {
                try {
                    const response = await axios.post('/login', { login, password });
                    const user = new User(
                        response.id,
                        response.name,
                        response.token,
                    );

                    LocalStorageUtils.setUser(user);

                    return response;
                } catch (error) {
                    console.error(error);

                    switch (error.status) {
                        case 401:
                            this.errorMessage = authorizationErrors.get('A002');
                            break;
                        case 500:
                            this.errorMessage = authorizationErrors.get('A003');
                            break;
                        default:
                            this.errorMessage = authorizationErrors.get('A001');
                            break;
                    }

                    return null;
                }
            }
        }
    }
</script>
