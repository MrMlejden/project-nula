import Vue from 'vue';
import Vuex from 'vuex';
import todos from './modules/todos';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        todos
    },
    state: {
        profile: {
            username: '@johnsmith',
            email: null,
            firstName: 'John',
            lastName: 'Smith',
            address: null,
            city: 'Belgrade',
            country: 'Serbia',
            zipCode: '11460',
            aboutMe: null
        },
    },
    getters: {},
    mutations: {
        saveProfile(state, profile) {
            state.profile = profile;
        }
    },
    actions: {
        saveProfile({ commit }, profile) {
            commit('saveProfile', profile);
        }
    }
});
