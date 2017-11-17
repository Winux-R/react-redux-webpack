/**
 * Created by Jinxin on 2017/11/16.
 */
const path = require('path');
const webpack = require("webpack");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
config = {
    entry: path.resolve(__dirname, "./app/main.jsx"),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["react", "es2015"]
            }
        }, {
            exclude: /node_modules/,
            loader: ["eslint-loader"]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new OpenBrowserPlugin({ url: "http://localhost:8080" }),
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    configFile: "./.eslintrc"
                }
            }
        })
    ]
}
module.exports = config;