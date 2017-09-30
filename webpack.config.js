var config = {
    entry: './main.js',
     
    output: {
       path:'/',
       filename: 'index.js',
    },
     
    devServer: {
       inline: true,
       port: 80
    },
     
    module: {

        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
             }
          ]
    }
 }

 module.exports = config;