const path = require("path")

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],  // どのstoryファイルを読み込むのか
  webpackFinal: async (config) => {
    config.module.rules = [
      // デフォルトのrulesに入っているCSS用の設定が悪さをするのでお帰りいただく
      ...config.module.rules.filter(rule => rule.test.source !== (/\.css$/).source),
      // css-loader を設定しなおす
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
    config.resolve.alias = {
      "@": path.resolve(__dirname, "..")      // こっちは私の趣味です
    }
    return config
  }
}