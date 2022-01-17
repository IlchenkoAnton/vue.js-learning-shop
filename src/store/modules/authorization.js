const authorization = {
    namespaced: true,
    state: {
        user: null,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        login({ commit }, { user }) {
            if (!user) {
                return;
            }

            commit('setUser', user);
        },
        logout({ commit }) {
            commit('setUser', null);
        }
    },
    getters: {
        token(state) {
            return state.user?.Token;
        }
    },
};

export default authorization;