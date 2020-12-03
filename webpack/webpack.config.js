const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        // 绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader','postcss-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            hash:true
        }),
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        port:8080,
        host:'localhost',
        open:true,
        hot:true
    }
}

