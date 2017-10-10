import Vue from 'vue';
import VueResource from 'vue-resource';
import { store } from '../store';

Vue.use(VueResource);

export const loginForm = Vue.component('login-form', {
    template: '\
        <form id="login-form" v-on:submit.prevent="login" v-if="!loggedIn">\
            <md-card v-bind:style="style">\
              <md-card-header>\
                <div class="md-title">Log in</div>\
              </md-card-header>\
              <md-input-container>\
                <label>Email</label>\
                <md-input placeholder="" v-model="email"></md-input>\
              </md-input-container>\
              <md-input-container>\
                <label>Password</label>\
                <md-input type="password" v-model="password"></md-input>\
              </md-input-container>\
              <md-subheader class="md-warn">{{ error }}</md-subheader>\
              <md-card-actions>\
                <md-button class="md-accent" type="submit">\
                  Sign In\
                </md-button>\
              </md-card-actions>\
            </md-card>\
        </form>\
    ',
    data: function () {
        return {
            email: "", password: "",
            style: {
                padding: "2rem",
                width: "90%",
                margin: "2rem auto",
                "max-width": "600px"
            },
            error: ""
        };
    },
    computed: {
        loggedIn: function () {
            return store.state.loggedIn;
        },
        loginUrl: function () {
            return store.state.API + "sessions/login";
        },
        sessionUrl: function () {
            return store.state.API + "sessions/";
        }
    },
    methods: {
        login: function () {
            this.$http.post(this.loginUrl, {
                email: this.email,
                password: this.password
            }).then(function (response) {
                console.log(response);
                var user = response.body;
                store.commit('logIn', user);
            }, function (error) {
                this.error = error.bodyText;
            });
        }
    }
});

