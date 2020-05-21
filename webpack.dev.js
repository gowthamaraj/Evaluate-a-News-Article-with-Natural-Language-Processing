const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode : "development",
    entry : "./src/client/index.js",
    output : {
        filename : "[name].bundle.js",
        path : path.resolve(__dirname,"dist"),
        libraryTarget: 'var',
        library: 'Client'
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html"
        })
    ],
    module : {
        rules : [
                {
                  test: /\.html$/,
                  use: ["html-loader"]
                },
            {
                test : /\.scss$/,
                use : [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                  loader: "file-loader",
                  options: {
                    name: "[name].[hash].[ext]",
                    outputPath: "imgs"
                  }
                }
            }
        ]
    }
}