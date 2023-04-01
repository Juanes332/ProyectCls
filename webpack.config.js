const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { SourceMapDevToolPlugin } = require('webpack');
const dotenv = require("dotenv");

dotenv.config();

const rules = [
    {
      enforce: "pre",
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: [
          "source-map-loader"
      ]
    },
    {
      test: /\.([jt]sx?)?$/,
      use: "swc-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.(css|scss|sass)$/,
      use: [
          { loader: MiniCssExtractPlugin.loader, options: { publicPath: "" } },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
      ]
    },
    {
      test: /\.(png|jpg|jpe?g|gif|svg)$/i,
      use: [
          {
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  outputPath: 'assets',
                  useRelativePath: true,
              }
          }
      ]
    },
    {
        test: /\.json$/,
        type: 'json'
    }
];

module.exports = (env, args) => {

  const port = process.env.PORT || 3100;
  const { mode } = args;
  const isProduction = mode === 'production';

  process.env.NODE_ENV = mode;

  let plugins = []

  plugins = [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      hash: true,
      minify: {
        removeComments: isProduction,
        collapseWhitespace: isProduction,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? './css/style.[contenthash].css' : './css/style.css'
    }),
  ];

  let performance = {};

  if (!isProduction) {
    plugins = [ ...plugins, new SourceMapDevToolPlugin({
      filename: '[file].map',
    })];
  } else 
    performance = {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }

  return {
    entry: './src/public/index.tsx', // punto de entrada
    output: {
        path: path.join(__dirname, '/src/public/build'), // carpeta de salida
        filename: isProduction ? '[name].[contenthash].js' : '[name].js' , // nombre del archivo
        assetModuleFilename: isProduction ? "assets/[hash][ext][query]" : "[base]",
        clean: true
    },
    context: path.resolve(__dirname), // carpeta de trabajo
    devServer: {
        port,
        historyApiFallback: true,
        hot: true,
        open: true,
        compress: true,
    },
    devtool: isProduction ? false : 'eval-source-map', // al depurar encuentre el archivo original
    module: {
        rules
    },
    plugins,
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.sass', '.json'], // extensiones que se van a usar
        modules: [
            'node_modules',
        ]
    },
    performance
  };
};