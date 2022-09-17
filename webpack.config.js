// const path = require('path');
// // const webpack = require('webpack');

// let common_config = {
//     entry: ['./src/main'],
//     output: {
//         filename: 'js/bundle.js',
//         path: path.join(__dirname, 'bin'),
//     },
//     resolve: {
//         extensions: ['.ts', '.js', '.json'],
//     },
//     module: {
//         rules: [{
//             test: /\.(.*)?$/,
//             loader: 'ts-loader',
//             options: {
//                 transpileOnly: true,
//             },
//         }, ],
//     },
// };
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/src/Main.ts",
    output: {
        path: __dirname + "/bin/js",
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {   // 需要打包的文件后缀
        extensions: [".tsx", ".ts", ".js"]
    }
}
