const webpack = require('webpack');

module.exports={
    entry:[
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!bootstrap/dist/js/bootstrap.min.js',
        './src/index.js'
    ],
    externals:{
        jquery: 'jQuery'
      },
      plugins:[
          new webpack.ProvidePlugin({
            '$':'jquery',
            'jQuery': 'jquery'
          })
      ],
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module:{
        rules: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            },
            test: /\.jsx?$/,
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.exec\.js$/,
            use: ['script-loader']
        },
        {
            test: /\.(woff2?|ttf|eot|svg|png|jpe?g|gif)$/,
            loader: 'file-loader'
        }
    ]
    }
}