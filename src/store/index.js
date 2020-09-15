import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        profile: {
            username: 'johnsmith',
            email: null,
            firstName: 'John',
            lastName: 'Smith',
            address: null,
            city: null,
            country: null,
            zipCode: null,
            aboutMe: null
        }
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
