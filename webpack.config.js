const webpack = require('webpack');
const path = require('path');

// To compile scss in a css file
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
    entry: ['./src/app.js', './scss/main.scss'],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: "script.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            { // regular css files
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader?importLoaders=1',
                }),
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: 'style.css',
            allChunks: true,
        }),
    ]
};

module.exports = config;
