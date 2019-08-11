var app = require('express')();
var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function (client) {
    client.emit('data', 'Hello WebSocket from 3001.');
    console.log('data')
    // io.on('message', function (message) {
    //     console.log(`[SERVER] Received: ${message}`);
    //     io.send(`ECHO: ${message}`, (err) => {
    //         if (err) {
    //             console.log(`[SERVER] error: ${err}`);
    //         }
    //     });
    // })
    client.on('home', function (data) {
        console.log('home')
        console.log(data)
        client.emit('data22', 'home from 3001.');
    });
    // io.onmessage = function(msg) { console.log(msg); };
});


server.listen(3001, function () {
    console.log('Responser is listening on port 3001');
});    //监听3001端口