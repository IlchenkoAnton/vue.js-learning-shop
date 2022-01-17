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
                <button
                    type="submit"
                    class="btn btn-primary"
                    :disabled="!login || !password">
                        <template v-if="isLoading">
                            <span class="spinner-border spinner-border-sm"></span>
                            Загрузка...
                        </template>
                        <template v-else>
                            Войти
                        </template>
                </button>
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
    import LocalStorageUtils from '../utils/local-storage.utils';
    import User from '../core/user';
    import authorizationErrors from '../common/authorization.errors';
    import UserApi from '../api/user.api';

    export default {
        name: 'Login',
        data() {
            return {
                login: '',
                password: '',
                errorMessage: '',
                isLoading: false,
            };
        },
        methods: {
            onSubmit() {
                if (!this.login || !this.password) {
                    return;
                }

                this.isLoading = true;
                this.$_login(this.login, this.password)
                    .then((data) => {
                        if (data) {
                            this.$router.push('/products');
                        }
                    })
                    .finally(() => {
                        this.isLoading = false;
                    });
            },
            async $_login(login, password) {
                try {
                    const data = await UserApi.login(login, password);
                    const user = new User(
                        data.id,
                        data.name,
                        data.token,
                    );

                    this.$store.dispatch('authorization/login', { user });
                    LocalStorageUtils.setUser(user);

                    return data;
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
