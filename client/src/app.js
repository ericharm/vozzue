import Vue from 'vue';
require('./components/loginForm');
require('./components/profile');


new Vue({
    el: "#app",
    template: '\
        <div>\
            <login-form></login-form>\
            <profile></profile>\
        </div>\
    '
});

