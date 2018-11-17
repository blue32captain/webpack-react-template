import ExtractTextPlugin from 'extract-text-webpack-plugin'
import config from 'app-config'


export default (commonConfig) => {
  commonConfig.mode = 'production'

  commonConfig.output = {
    path: config.paths.base(`build`),
    filename: '[name].[hash:6].js',
    chunkFilename: '[id].[hash:6].chunk.js',
    publicPath: config.publicPath,
  }


  commonConfig.plugins.push(
    new ExtractTextPlugin({
      filename: '[name].[hash:6].css',
      allChunks: true,
    }),
  )

  return commonConfig
}
