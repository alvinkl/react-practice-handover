const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js'),
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
}
