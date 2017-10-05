require('vue-resource');
var Vuex = require('vuex');

Vue.use(Vuex);

const API = "http://localhost:9292/";

const store = new Vuex.Store({
    state: {
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

const loginForm = new Vue({
    el: '#login-form',
    data: {
        email: "", password: ""
    },
    computed: {
        loggedIn: function () {
            return store.state.loggedIn;
        }
    },
    methods: {
        login: function () {
            var loginUrl = API + "sessions/login";
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

const profile = new Vue({
    el: '#profile',
    computed: {
        currentUser: function () {
            return store.state.currentUser;
        },
        loggedIn: function () {
            return store.state.loggedIn;
        }
    },
});


