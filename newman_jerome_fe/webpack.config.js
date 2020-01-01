const webpack = require("webpack");
const packageJSON = require('./package.json');
const path = require("path");

const PATHS = {
    build: path.join(__dirname, 'target', 'classes', 'META-INF', 'resources', 'webjars', packageJSON.name, packageJSON.version)
};

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = (env) => {
    const {PLATFORM, VERSION} = env;
    return {
        entry: [
            "@babel/polyfill",
            path.resolve(__dirname, "src", "index.js")],
        output: {
            path: PATHS.build,
            filename: "bundle.js",
        },
        resolve: {
            extensions: [".js", ".jsx"],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        PLATFORM === "production" ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader",
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: PLATFORM !== "production" ? '[name].css' : '[name].[hash].css',
                chunkFilename: PLATFORM !== "production" ? '[id].css' : '[id].[hash].css',
            }),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ["assets", PATHS.build],
            }),
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, "src", "index.html"),
                filename: path.resolve(PATHS.build, "index.html"),
            }),
            new webpack.DefinePlugin({
                "process.env.VERSION": JSON.stringify(env.VERSION),
                "process.env.PLATFORM": JSON.stringify(env.PLATFORM),
            }),
        ],
        devServer: {
            contentBase: "./src",
            port: 9000,
        },
    }

};
