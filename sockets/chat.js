const server = require('net').createServer()
let counter = 0
let sockets = []

const onAcceptConnection = socket => {
  socket.id = counter++
  sockets[socket.id] = socket

  console.log(`${socket.id} - Accepted new connection!`)
  socket.write(`Welcome! Your id is: ${socket.id}`)

  socket.on('data', onReceiveData(socket))
  socket.on('end', onCloseConnection.bind(socket))
}

const onReceiveData = socket => data => {
  console.log(`${socket.id} - Message:`, data.toString())
}

const onCloseConnection = socket => {
  console.log(`${socket.id} - Disconnected`)
  delete sockets[socket.id]
}

/**
 * Server is a object that uses EventEmitter interface
 */
server.on('connection', onAcceptConnection)
server.listen(8000, _ => console.log('Started server!'))
