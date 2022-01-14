import { createStore } from 'vuex';
import authorization from './modules/authorization';

const store = createStore({
    strict: true,
    modules: {
        authorization: authorization
    }
});

export default store;