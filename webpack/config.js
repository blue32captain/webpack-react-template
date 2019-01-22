import webpack from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import AppConfigPlugin from 'app-config/webpack'
import config from 'app-config'
import rulesMap from './rules'


const rules = Object.keys(rulesMap)
  .map((k) => rulesMap[k])
  .map((rule) => Array.isArray(rule) ? rule : (rule.default || rule[config.env]))
  .reduce((result, rule) => result.concat(rule), []);


const globals = {
  'process.env': {
    'NODE_ENV': JSON.stringify(config.env),
  },
  // TODO fix __CONFIG__ - remove it and check app-config/webpack to resolve in /client.js
  __CONFIG__: JSON.stringify(config),
}

const webpackConfig = {
  entry: [
    config.paths.src('index.js'),
    config.paths.webpack('webpack-hot-middleware/client'),
  ],

  output: {
    filename: 'main.js',
    path: config.paths.base('dist'),
  },

  module: {
    rules,
  },

  node: {
    fs: 'empty',
  },

  resolve: {
    alias: {
      src: config.paths.base('src'),
    },
    modules: [
      config.paths.base('client'),
      config.paths.base('src'),
      config.paths.base('local_modules'),
      'node_modules',
    ],
    extensions: [ '.js', '.jsx', '.scss' ],
    plugins: [],
  },

  plugins: [
    new AppConfigPlugin(),
    new webpack.DefinePlugin(globals),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({ template: config.paths.client('index.html') }),
    new webpack.ContextReplacementPlugin(
      /\.\/locale$/,
      'empty-module',
      false,
      /js$/
    ),
  ]
};

export default webpackConfig
