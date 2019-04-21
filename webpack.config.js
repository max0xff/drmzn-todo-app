const webpack = require('webpack');
const path = require('path');
const version = require("./package.json").version;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Client settings
const client = {
  performance: {
    hints: false
  },
  optimization: {
    sideEffects: false,
    minimizer: [new TerserPlugin({
      cache: true,
      parallel: true
    })],
  },
  name: 'main',
  target: 'web',
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, './dist/public/'),
    filename: `main.${version}.min.js`
  },
  context: __dirname,
  mode: `${process.env.NODE_ENV}`,
  node: { fs: 'empty' },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
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
      },
      {
        test: /\.mst$/,
        loader: "mustache-loader",
        options: {
          render: {
            build: {
              version: '0.0.8'
            },
            meta: {
              robots: 'index, follow',
              og: {
                site_name: 'drmzn-todo-app',
                description: 'Simple demo of drmzn todo app',
                image: '',
                title: 'Drmzn Todo App Example'
              }
            }
          }
        }  
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/config/index.mst',
      inject: false
    }),
    new MiniCssExtractPlugin({
      filename: `[name].${version}.min.css`
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyPlugin([
      { from: './src/media', to: './' },
    ])
  ],
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
    alias: {
      src: path.resolve(__dirname, 'src/')
    }
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};

// Server settings
const server = {
  mode: `${process.env.NODE_ENV}`,
  node: { fs: 'empty' },
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      src: path.resolve(__dirname, 'src/')
    }
  },
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server.ts',
  output: {
    path: path.resolve(__dirname, './dist/server/'),
    filename: 'server.js'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader'
    },
    {
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
    }]
  }
};

// Service Worker Settings
const sw = {
  mode: `${process.env.NODE_ENV}`,
  node: { fs: 'empty' },
  resolve: {
    extensions: ['.ts'],
    alias: {
      src: path.resolve(__dirname, 'src/')
    }
  },
  name: 'sw',
  target: 'webworker',
  entry: './src/sw.ts',
  output: {
    path: path.resolve(__dirname, './dist/public/'),
    filename: `sw.${version}.min.js`
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader'
    }]
  }
};

module.exports = [
  client,
  server,
  sw
];
