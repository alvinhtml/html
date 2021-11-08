const WebSocket = require('ws');

// const ws = new WebSocket('wss://192.168.14.70:9001');


const ws = new WebSocket('wss://192.168.14.70:9001', {
  protocolVersion: 8,
  origin: 'https://192.168.14.70:9001',
  rejectUnauthorized: false
})

ws.on('open', function open() {
  ws.send('Hi Server')
});

ws.on('message', function incoming(data) {
  console.log(data)
});
