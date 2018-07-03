const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {

    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },

    mode: 'development',

