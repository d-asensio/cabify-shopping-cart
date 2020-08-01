const fs = require('fs')
const path = require('path')

const {
  EnvironmentPlugin,
  LoaderOptionsPlugin,
  HotModuleReplacementPlugin,
  NoEmitOnErrorsPlugin
} = require('webpack')

const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// #region Configuration Constants

const SRC_PATH = path.resolve(__dirname, 'src')

const ENTRY_FILE = path.join(__dirname, 'src/index.js')
const BUILD_DIR = path.join(__dirname, 'build')

const DATA_DIR = path.resolve(__dirname, 'data')

const PUBLIC_DIR = path.join(__dirname, 'public')
const MAIN_HTML_FILE = path.join(PUBLIC_DIR, 'index.html')
const MANIFEST_JSON_FILE = path.join(PUBLIC_DIR, 'manifest.json')

const SERVICE_HOST_URL = ''

// #endregion

// #region Webpack Configuration Object

module.exports = {
  mode: (
    isDevelopment()
      ? 'development'
      : 'production'
  ),
  entry: {
    bundle: ENTRY_FILE
  },
  output: {
    path: BUILD_DIR,
    filename: (
      isDevelopment()
        ? '[name].js'
        : '[name][hash:6].js'
    )
  },
  devtool: (
    isDevelopment()
      ? 'source-map'
      : 'none'
  ),
  watch: isDevelopment(),
  watchOptions: {
    aggregateTimeout: 300
  },
  resolve: {
    extensions: ['*', '.js']
  },
  resolveLoader: {
    modules: [
      path.join(__dirname, 'node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js)?$/,
        loaders: ['babel-loader'],
        include: [SRC_PATH]
      }
    ]
  },
  plugins: [
    new EnvironmentPlugin({
      SERVICE_HOST_URL
    }),
    new LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        context: SRC_PATH,
        output: {
          path: BUILD_DIR
        }
      }
    }),
    new CopyPlugin({
      patterns: [
        {
          context: PUBLIC_DIR,
          from: '**/*',
          to: BUILD_DIR
        },
        {
          context: DATA_DIR,
          from: '**/*',
          to: path.join(BUILD_DIR, 'data')
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: MAIN_HTML_FILE,
      templateParameters: {
        manifest: readJsonFile(MANIFEST_JSON_FILE)
      },
      filename: 'index.html'
    }),
    new HotModuleReplacementPlugin(),
    new NoEmitOnErrorsPlugin()
  ]
}

// #endregion

// #region Configuration Utilities

function isDevelopment () {
  const { NODE_ENV = 'development' } = process.env
  return NODE_ENV === 'development'
}

function readJsonFile (filePath) {
  const fileContents = fs.readFileSync(filePath)
  return JSON.parse(fileContents)
}

// #endregion
