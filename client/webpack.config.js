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

