module.exports = {

    entry: {
        bundle: __dirname + '/src/app.js',
    },

    output: {
        path: __dirname + '/public/js',
        filename: '[name].js'
    },

    devServer: {
        contentBase: './public',
        inline: true
    },

    watch: true,

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: [
                    ]
                    // other vue-loader options go here
                }
            },
            { test: /\.scss$/, loader: 'vue-style-loader!css-loader!sass-loader'},
            { test: /\.sass$/, loader: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'},
            { test: /\.css$/, loader: 'vue-style-loader!css-loader!'},
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

