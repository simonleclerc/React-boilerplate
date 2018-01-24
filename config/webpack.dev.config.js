var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
    // for debugging webpack's output
    devtool: "source-map",
    devServer: {
        hot: true
    }
});