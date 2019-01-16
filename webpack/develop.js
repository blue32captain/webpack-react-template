import config from 'app-config'
import webpack from 'webpack'


export default (commonConfig) => {
  commonConfig.mode = 'development';

  commonConfig.output = {
    path: config.paths.base('build'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: config.publicPath,
  };

  commonConfig.node = {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  };

  commonConfig.devtool = 'cheap-module-source-map';

  commonConfig.devServer = {
    publicPath: commonConfig.output.publicPath,
    stats: 'errors-only',
    noInfo: true,
    lazy: false,
    hot: true,
    host: 'localhost',
  };

  commonConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
  );

  return commonConfig
}
