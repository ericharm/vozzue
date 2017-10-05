import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
var store = require('../store');

module.exports = Vue.component('login-form', {
    template: '\
        <form id="login-form" v-on:submit.prevent="login" v-if="!loggedIn">\
        <label>Email:</label>\
        <input v-model="email" />\
        <label>Password:</label>\
        <input type="password" v-model="password" />\
        <button>Login</button>\
        </form>\
    ',
    //props: ['email', 'password'],
    data: function () {
        return {
            email: "", password: ""
        };
    },
    computed: {
        loggedIn: function () {
            return store.state.loggedIn;
        },
        loginUrl: function () {
            // should use store getters
            return store.state.API + "sessions/login";
        }
    },
    methods: {
        login: function () {
            console.log(this.email);
            var loginUrl = this.loginUrl;
            this.$http.post(loginUrl, {
                email: this.email,
                password: this.password
            }).then(function (response) {
                console.log(response);
                var user = response.body;
                store.commit('logIn', user);
            }, function (error) {
                console.log(error);
            });
        }
    }
});

