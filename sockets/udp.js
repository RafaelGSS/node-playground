const dgram = require('dgram')

const server = dgram.createSocket('udp4')
const PORT = 3333
const HOST =  '127.0.0.1'


server.on('listening', () => console.log('UDP Server listening'))

server.on('message', (msg, rinfo) => {
  console.log(`${rinfo.address}:${rinfo.port} - ${msg}`)
})

// This is not Function.prototype.bind!!
server.bind(PORT, HOST)

// Client
const client = dgram.createSocket('udp4')

client.send('Holly shit!', PORT, HOST, err => {
  if (err) throw err

  console.log('UDP message sent')
  client.close()
})