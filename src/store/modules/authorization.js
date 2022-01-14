import User from '../../core';

const authorization = {
    namespaced: true,
    state: {
        user: User,
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
        }
    },
    getters: {
        user(state) {
            return state.user;
        }
    },
};

export default authorization;