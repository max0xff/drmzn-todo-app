const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const extractSass = new ExtractTextPlugin({
  allChunks: true,
  filename: '../css/main.min.css',
});

const version = require("./package.json").version;

const options = {
  version,
  devtool: false,
  sm: false
}

console.log(process.env.NODE_ENV, process.env.SERVER_IP, process.env.SERVER_PORT)

if (process.env.NODE_ENV === 'development') {
  options.devtool = 'inline-source-map';
  options.sm = true;
} else {
  options.devtool = false;
  options.sm = false;  
}

const serverPlugins = [
  new webpack.DefinePlugin({
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'SERVER_IP': JSON.stringify(process.env.SERVER_IP),
    'SERVER_ENV': JSON.stringify(true)
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new HardSourceWebpackPlugin(),
];

const clientPlugins = [
  extractSass,
  new webpack.DefinePlugin({
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'SERVER_IP': JSON.stringify(process.env.SERVER_IP),
    'SERVER_ENV': JSON.stringify(false)
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new HardSourceWebpackPlugin(),
];

const resolveOptions = {
  extensions: ['.ts', '.js', '.tsx'],
  alias: {
    src: path.resolve(__dirname, 'src/'),
    tests: path.resolve(__dirname, 'tests/')
  }
};

const optimizationOptions = {
  namedModules: true,
  splitChunks: {
    chunks: 'async',
    minChunks: 1,
    name: true
  },
  noEmitOnErrors: true,
  concatenateModules: false
};

const mustacheOptions = {
  test: /\.html$/,
  exclude: /(node_modules|public|.git)/,
  loader: 'mustache-loader',
  options: {
    noShortcut: true,
    tiny: true,
    minify: {
      minifyCSS: true,
      minifyJS: true,
      caseSensitive: true,
      removeComments: true,
      sortClassName: true,
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      preserveLineBreaks: false,
      ignoreCustomFragments: [/\{\{.*?}}/]
    }
  }
};

const commonConfig = {
  watch: false,
  watchOptions: {
    poll: true
  },
  context: __dirname,
  mode: `${process.env.NODE_ENV}`,
  node: { fs: 'empty' },
  resolve: resolveOptions,
  optimization: optimizationOptions
};

const moduleOptionsClient = {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|public|.git)/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      },
    },
    {
      test: /\.scss$/,
      exclude: /(node_modules|public|.git)/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader'
        },
        {
          loader: 'postcss-loader',
          options: {
            minimize: true,
            sourceMap: options.sm
          }
        },
        {
          loader: 'sass-loader',
          options: {
            minimize: true,
            sourceMap: options.sm,
            includePaths: [
              path.join(__dirname, './src/styles/')
            ]
          }
        }],
        fallback: 'style-loader'
      })
    },
    {
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader'
    },
    mustacheOptions
  ]
};

const client = {
  ...commonConfig,
  plugins: clientPlugins,
  devtool: `${options.devtool}`,
  performance: { hints: false },
  name: 'main',
  target: 'web',
  entry: './src/app.tsx',
  output: {
    path: path.resolve(__dirname, './public/js/'),
    filename: `main.${version}.min.js`
  },
  module: moduleOptionsClient
};

const configServer = {
  ...commonConfig,
  context: __dirname,
  mode: 'development',
  devtool: `${options.devtool}`,
  target: 'node',
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  // plugins: serverPlugins,
  node: { fs: 'empty' },
  resolve: resolveOptions,
  // optimization: optimizationOptions
};

const server = {
  ...configServer,
  plugins: serverPlugins,
  mode: 'development',
  name: 'app',
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'inline-source-map',
  entry: './src/server.tsx',
  output: {
    path: path.resolve(__dirname, './server/'),
    filename: 'server.js'
  },
  module: moduleOptionsClient
};

module.exports = [
  client,
  server
];
