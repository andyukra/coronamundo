const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

/** SERVER SOCKET **/
const server = http.createServer(app);
const io = socketIO(server);

/** WEBPACK **/
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');

/** MIDDLEWARES **/
app.use(webpackDevMiddleware(webpack(config)));

/** CONFIG STATIC FOLDER **/
app.use(express.static(path.join(__dirname, 'public')));

/** SOCKETS START **/
io.on('connection', socket => {

    console.log('Conectado este men :', socket.id);

});

server.listen(3000, () => {
    console.log('Servidor Ejecutandose en puerto 3000');
}); 