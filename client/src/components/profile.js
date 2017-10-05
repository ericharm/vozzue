import Vue from 'vue';
import { store } from '../store';

export const profile = Vue.component('profile', {
    template: '\
        <div id="profile" v-if="loggedIn">\
            Profile for {{ currentUser.email }}\
        </div>\
    ',
    props: [],
    computed: {
        currentUser: function () {
            return store.state.currentUser;
        },
        loggedIn: function () {
            return store.state.loggedIn;
        }
    },
});


