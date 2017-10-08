import Vue from 'vue';
import VueMaterial from 'vue-material';
Vue.use(VueMaterial);
import { loginForm } from './components/loginForm';
import { profile } from './components/profile';
require("../public/css/style.scss");

//Vue.material.registerTheme( 'vozzue', {
  //primary: 'purple',
  //accent: 'yellow',
  //warn: 'red',
  //background: 'white'
//});

//Vue.material.setCurrentTheme('vozzue');

new Vue({
    el: "#app",
    template: '\
        <div class="top-level-container">\
            <md-toolbar>\
              <h2 class="md-title">Vozzue</h2>\
            </md-toolbar>\
\
            <login-form></login-form>\
            <profile></profile>\
        </div>\
    '
});

