const webpack = require("webpack");
const packageJSON = require('./package.json');
const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATHS = {
    build: path.join(__dirname, 'target', 'classes', 'META-INF', 'resources', 'webjars', packageJSON.name, packageJSON.version)
};

module.exports = (env) => {
    const {PLATFORM} = env;
    return {
        devtool: 'inline-source-map',
        target: 'electron-renderer',
        entry: [
            "@babel/polyfill",
            path.resolve(__dirname, "src", "renderer", "index.jsx")],

        module: {
            rules: [
                {
                    test: [/\.js$/, /\.jsx$/],
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/react", "@babel/env"],
                            cacheDirectory: true
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        PLATFORM === "production" ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader",
                    ],
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json'],
            modules: [path.join(__dirname, 'src', 'renderer'), 'node_modules']
        },
        // externals: { 'sqlite3':'commonjs sqlite3'},
        plugins: [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ["assets", PATHS.build],
            }),
            new HtmlWebPackPlugin({
                filename: path.resolve(PATHS.build, "index.html"),
            }),
            new webpack.DefinePlugin({
                "process.env.VERSION": JSON.stringify(env.VERSION),
                "process.env.PLATFORM": JSON.stringify(env.PLATFORM),
            }),
        ],
    }
}
