﻿import { User } from '../../core';

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
        login({ commit }) {
            commit('setUser', null);
        }
    },
    getters: {
        user(state) {
            return state.user;
        }
    },
};

export default authorization;