// wss.js

const fs = require('fs');

// 一些配置信息
const cfg = {
    port: 8888,
    ssl_key: 'ssl.key',
    ssl_cert: 'ssl.crt'
};

const httpServ = require('https');
const WebSocketServer = require('ws').Server; // 引用Server类

// 创建request请求监听器
const processRequest = (req, res) => {
    res.writeHead(200);
    res.end('厉害了，我的WebSockets!\n');
};

const app = httpServ.createServer({
    // 向server传递key和cert参数
    key: fs.readFileSync(cfg.ssl_key),
    cert: fs.readFileSync(cfg.ssl_cert)
}, processRequest).listen(cfg.port);

// 实例化WebSocket服务器
const wss = new WebSocketServer({
    server: app
});
// 如果有WebSocket请求接入，wss对象可以响应connection事件来处理
wss.on('connection', (wsConnect) => {
    console.log('服务器已启动，监听中~');
    wsConnect.on('message', (message) => {
        console.log(`服务器接收到：${message}`);
        wsConnect.send(`服务器回复: ${message}`, (err) => {
            if (err) {
                console.log(`服务器错误：${err}`);
            }
        });
    });
});





// const WebSocket = require('ws');
//
// const wss = new WebSocket.Server({ port: 7060 });
//
// wss.on('connection', function connection(ws) {
//
//   ws.on('message', function incoming(message) {
//     console.log('received: %s', message);
//     ws.send('Hi Client');
//   });
//
//   setInterval(() => {
//     ws.send('Hi Client' + new Date());
//   }, 3000)
// });
