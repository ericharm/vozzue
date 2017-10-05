import Vue from 'vue';
require('vue-resource');
var store = require('../store');

module.exports = Vue.component('profile', {
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


