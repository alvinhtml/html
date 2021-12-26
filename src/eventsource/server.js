const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {
    'Transfer-Encoding': 'chunked',
    'Content-Type': 'text/event-stream',
    'Access-Control-Allow-Origin': '*'
  })

  let timer

  setTimeout(() => {
    clearInterval(timer)
    res.end('event: hello_event\ndata: {"message":"' + new Date().getTime() + '"}\n\n')
  }, 10000)

  timer = setInterval(function() {
    const message = 'event: hello_event\ndata: {"message":"' + new Date().getTime() + '"}\n\n'
    console.log("send:", new Date().getTime())
    res.write(message)
  }, 1000)

  res.socket.on('close', function () {
    console.log("socket: closed")
    clearInterval(timer)
  })

  res.on('close', () => {
    console.log("res: closed")
    clearInterval(timer)
  })
}).listen(9100)
