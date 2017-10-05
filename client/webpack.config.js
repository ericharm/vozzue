module.exports = {

    entry: {
        bundle: __dirname + '/public/js/index.js',
    },

    output: {
        path: __dirname + '/public/js',
        filename: '[name].js'
    },

    devServer: {
        contentBase: './public',
        inline: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }

};

