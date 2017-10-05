import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        API: "http://localhost:9292/",
        loggedIn: false,
        currentUser: {
            email: undefined
        }
    },
    mutations: {
        logIn: function (state, user) {
            state.loggedIn = true;
            state.currentUser = user;
        }
    }
});

