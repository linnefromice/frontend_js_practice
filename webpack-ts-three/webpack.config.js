module.exports = {
    // mode を production に設定すると最適化された状態で、
    // development に設定すると sourceMap 有効でJSが出力される
    mode: "development",
    entry: "./src/index.ts", // メインとなるJSファイル(entrypoint)
    output: { // ファイルの出力設定
        path: `${__dirname}/dist`, // 出力ファイルのディレクトリ名
        filename: "main.js" // 出力ファイル名
    },
    module: {
        rules: [
            {
                use: 'ts-loader', // TypeScript をコンパイルする
                test: /\.ts$/ // 拡張子 .ts の場合
            }
        ]
    },
     resolve: {
         extensions: [".ts", ".js"] // import 文で拡張子を解決する
     },
     target: ["web"]
}