const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GhPagesWebpackPlugin = require('gh-pages-webpack-plugin');


const ROOT_DIR = path.resolve(__dirname);

const DIST_DIR = path.join(ROOT_DIR, 'dist');

const SRC_DIR = path.join(ROOT_DIR, 'src');

const SRC_FILE = path.join(SRC_DIR, 'index.jsx');

const MODULES_DIR = path.join(ROOT_DIR, 'node_modules');

const PRODUCTION = process.env.NODE_ENV === 'production';

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(SRC_DIR, 'index.html'),
  filename: 'index.html',
});

const cleanWepackPlugin = new CleanWebpackPlugin([DIST_DIR]);

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: PRODUCTION ? JSON.stringify('production') : JSON.stringify('developement'),
  },
});

const ghPagesPlugin = new GhPagesWebpackPlugin({
  path: DIST_DIR,
  options: {
    user: {
      name: 'MarcMcIntosh',
      email: 'marcmcintosh1987@gmail.com',
    },
  },
});

const jsRules = { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ };

const extensions = ['.js', '.json', '.jsx', '.scss', '.sass', '.css', '.md'];

const indentName = production => (production ? '[hash:base64]' : '[name]-[local]');

const cssOptions = ({ production = false, importLoaders = 1 } = {}) => ({
  loader: 'css-loader',
  options: {
    sourceMap: true,
    modules: true,
    localIdentName: indentName(production),
    importLoaders,
    minimize: production,
  },
});

const cssRules = ({ production }) => {
  const loaders = [
    cssOptions({ production }),
    // postCssOptions
    'resolve-url-loader',
  ];
  return { test: /\.css$/, use: loaders };
};

const scssRules = ({ production }) => {
  const loaders = [
    cssOptions({ production, importLoaders: 2 }),
    // postCssOptions,
    'resolve-url-loader',
    {
      loader: 'sass-loader',
      options: { sourceMap: true, includePaths: [MODULES_DIR] },
    },
  ];
  return { test: /\.s(a|c)ss$/, use: loaders };
};

const markdownRules = {
  test: /\.md$/,
  exclude: /node_modules/,
  loader: 'file-loader',
  options: {
    name: PRODUCTION ? '[hash].[ext]' : '[path][name].[ext]',
  },
};

const defaultPlugins = [
  definePlugin,
  htmlWebpackPlugin,
  cleanWepackPlugin,
];

const plugins = PRODUCTION ? defaultPlugins.concat(ghPagesPlugin) : defaultPlugins;

module.exports = {
  mode: PRODUCTION ? 'production' : 'development',
  entry: SRC_FILE,
  devtool: PRODUCTION ? false : 'inline-source-map',
  // devServer: { contentBase: DIST_DIR, hot: true, historyApiFallback: true },
  output: { path: DIST_DIR, filename: '[hash].js' },
  resolve: {
    // odules: [process.env.NODE_PATH || 'node_modules'],
    extensions,
  },
  target: 'web',
  stats: { children: false },
  plugins,
  module: {
    rules: [
      jsRules,
      markdownRules,
      cssRules(PRODUCTION),
      scssRules(PRODUCTION),
    ],
  },
};
