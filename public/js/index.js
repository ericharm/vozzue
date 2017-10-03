require('vue-resource');

var login = new Vue({
    el: '#login-form',
    data: {
        email: "", password: ""
    },
    methods: {
        login: function () {

            console.log(this.email, this.password);
            this.$http.post('/login', {
                email: this.email,
                password: this.password
            }).then(function (data) {
                console.log("success");
                console.log(data);
            }, function (error) {
                console.log("error");
                console.log(error);
            });
        }
    }
});

