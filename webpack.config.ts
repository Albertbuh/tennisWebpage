import { Configuration } from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = (): Configuration => {
  return {
    mode: 'production', //  development or production
    entry: path.resolve(__dirname, "./src/index.tsx"), // app entry point
    output: {
      path: path.resolve(__dirname, "./dist/"), //build folder
      filename: "[name].js", //build entry file name
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          exclude: [/node_modules/, /\.(spec|test).(ts|js)x?$/i],
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: true,
            compact: true,
          },
        },
        {
          test: /\.css$/,  
          use: ['style-loader', 'css-loader'],
       },
       { 
        test: /\.(png|jpg)$/, 
        loader: "url-loader"
      }
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".tsx", ".ts", ".json", ".css", ".png"],
      alias: {
        src: path.resolve(__dirname, "./src/"),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
        inject: true,
      }),
    ],
  };
};

export default config;