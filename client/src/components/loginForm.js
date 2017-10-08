import Vue from 'vue';
import VueResource from 'vue-resource';
import { store } from '../store';

Vue.use(VueResource);

export const loginForm = Vue.component('login-form', {
    template: '\
    <form id="login-form" v-on:submit.prevent="login" v-if="!loggedIn">\
        <md-card>\
          <md-card-header>\
            <div class="md-title">Log in</div>\
          </md-card-header>\
          <div class="padder">\
              <md-input-container>\
                <label>Email</label>\
                <md-input placeholder="" v-model="email"></md-input>\
              </md-input-container>\
\
              <md-input-container>\
                <label>Password</label>\
                <md-input type="password" v-model="password"></md-input>\
              </md-input-container>\
\
              <md-card-actions>\
                <md-button type="submit" v-on:click="login">Sign In</md-button>\
              </md-card-actions>\
            </div>\
        </md-card>\
    </form>\
    ',
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
            return store.state.API + "sessions/login";
        }
    },
    methods: {
        login: function () {
            console.log("awef");
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
        //<form id="login-form" v-on:submit.prevent="login" v-if="!loggedIn">\
            //<label>Email:</label>\
            //<input v-model="email" />\
            //<label>Password:</label>\
            //<input type="password" v-model="password" />\
            //<button>Login</button>\
        //</form>\
