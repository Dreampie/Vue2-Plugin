const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const properties = require("./application.json")


module.exports = require('./webpack.config.build.js');

module.exports.entry = {
    'common': ['jquery', 'vue', 'vue-router', 'vuex', 'vue-cookie', 'axios', '@dreampie/semantic-ui'],
    'js/main': './src/main.js',
}
module.exports.externals = {}
module.exports.output = {
    path: path.resolve(__dirname, './example'),
    filename: '[name].js'
}
module.exports.devServer = {
    historyApiFallback: true,
    noInfo: true,
    contentBase: './example',
    disableHostCheck: true
}

module.exports.module.rules[0] = {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
        loaders: {
            'stylus': ExtractTextPlugin.extract({
                use: 'css-loader!stylus-loader',
                fallback: 'vue-style-loader'
            })
        }
    }
}

module.exports.devtool = '#eval-source-map'
module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin({filename: 'js/common.js', name: 'common'}),
    new ExtractTextPlugin('css/common.css'),
    new HtmlWebpackPlugin({
        title: properties.title,
        filename: 'index.html',
        template: './src/index.html',
        inject: true,
        hash: true
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([
        {from: './favicon.ico'},
        {from: './server.js'},
        {from: './application.json'},
    ]), new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"' + process.env.NODE_ENV + '"',
        }
    })
])