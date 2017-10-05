import Vue from 'vue';
import VueMaterial from 'vue-material';
Vue.use(VueMaterial);
import { loginForm } from './components/loginForm';
import { profile } from './components/profile';


new Vue({
    el: "#app",
    template: '\
        <div class="top-level-container">\
            <login-form></login-form>\
            <profile></profile>\
        </div>\
    '
});

