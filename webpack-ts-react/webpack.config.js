const HTMLWebpackPlugin = require('html-webpack-plugin');
const templateContent = `
<html>
  <body>
    <div id="app"></div>
  </body>
</html>
`;

module.exports = {
    mode: "development",
    entry: "./src/main.tsx",
    output: {
        path: `${__dirname}/dist`,
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [new HTMLWebpackPlugin({ templateContent: templateContent })],
    target: ["web", "es5"]
};
