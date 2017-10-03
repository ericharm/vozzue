module.exports = {

    entry: {
        bundle: __dirname + '/public/js/index.js',
    },

    output: {
        path: __dirname + '/public/js',
        filename: '[name].js'
    }

};

