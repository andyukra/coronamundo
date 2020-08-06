const path = require('path');

module.exports = {
    mode : 'development',
    entry : path.join(__dirname, 'src'),
    output : {
        path : '/',
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /(\.js|.jsx)$/,
                exclude : path.join(__dirname, '/node_modules'),
                use : ['babel-loader']
            }
        ]
    }

}