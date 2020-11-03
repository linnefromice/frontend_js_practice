const path = require("path")

module.exports = {
  stories: ['../components/**/*.stories.tsx'],  // どのstoryファイルを読み込むのか
  webpackFinal: async (config) => {
    // 絶対パスの設定
    /*
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "../src")
    }
    */
    config.module.rules = [
      // デフォルトのrulesに入っているCSS用の設定が悪さをするのでお帰りいただく
      ...config.module.rules.filter(rule => rule.test.source !== (/\.css$/).source),
      // css-loader を設定しなおす
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
    return config
  }
}