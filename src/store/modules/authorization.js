const authorization = {
    namespaced: true,
    state: {
        login: true,
    },
    mutations: {},
    getters: {
        loginValue(state) {
            return state.login;
        }
    },
    actions: {},
};

export default authorization;