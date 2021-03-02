const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:7060');

ws.on('open', function open() {
  ws.send('Hi Server');
});

ws.on('message', function incoming(data) {
  console.log(data);
});
