import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueRouter from 'vue-router';
Vue.use(VueMaterial);
Vue.use(VueRouter);

import { loginForm } from './components/loginForm';
import { profile } from './components/profile';
import { signUp } from './components/signUp';
require("../public/css/style.scss");

// routes
const LoginForm = loginForm;
const Profile = profile;
const SignUp = signUp;

const routes = [
  { path: '/', component: LoginForm },
  { path: '/profile', component: Profile },
  { path: '/signup', component: SignUp }
];

const router = new VueRouter({routes});

new Vue({
    el: "#app",
    router: router,
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent () {
            return routes[this.currentRoute] || NotFound;
        }
    },
    render: function (h) {
        return (
            <div class="top-level-container">
                <md-toolbar>
                  <md-menu md-align-trigger>
                      <md-button md-menu-trigger class="md-icon-button">
                        <md-icon>menu</md-icon>
                      </md-button>
                      <md-menu-content>
                        <md-menu-item>
                          <router-link to="/signup">Sign Up</router-link>
                        </md-menu-item>
                      </md-menu-content>
                  </md-menu>
                  <h2 class="md-title">VOZZUE</h2>
                </md-toolbar>
                <router-view></router-view>
            </div>
        );
    }
});


