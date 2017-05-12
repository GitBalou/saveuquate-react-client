const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // folder containing files to process
    context: path.resolve(__dirname, './src'),

    // entry point for the processing tree
    entry: {
        app: ['./app.js' ],
        mock: ['./mock/kittens.json']
    },

    // output move to this folder
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    // webpack resolves js and jsx files
    resolve: {
        extensions: ['.js', '.jsx', 'css'],
        modules: [
            path.resolve('./src'),
            'node_modules'
        ]
    },

    // additional module
    module: {
        rules: [
            // babel transpiler for es6 / react script
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
        ]
    },

    // plugins
    plugins: [

        // generate html index with bundled files
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: ['app'],
        }),
    ],

    // serveur de dev
    devServer: {
        contentBase: path.resolve(__dirname, './src'), // index is served from src
        historyApiFallback: true // fallback any 404 error to index.html
    },

    // source map
    devtool: 'source-map'

};