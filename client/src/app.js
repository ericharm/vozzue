import Vue from 'vue';
require('./components/loginForm');
require('./components/profile');


new Vue({
    el: "#app",
    template: '\
        <div>\
            <h1>Welcome to Chooble</h1>\
            <login-form></login-form>\
            <profile></profile>\
        </div>\
    '
});

