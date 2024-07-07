const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "client", "src", "index.js"), // Update the entry path
    mode: 'development',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "client", "dist"), // Update the output path
    },
    resolve: {
        alias: {
            'react': path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom'),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "client", "dist", "index.html"), // Update the template path
        }),
    ],
}
