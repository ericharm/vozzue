import Vue from 'vue';

export const signUp = Vue.component('signUp', {
    template: '\
        <div id="sign-up">\
            Sign Up\
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



