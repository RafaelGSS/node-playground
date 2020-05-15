const Fastify = require('fastify')

const sleep = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), seconds)
  })
}

const app = Fastify()

app.get('/', async (request, reply) => {
  const response = await sleep(2);
  reply.send(response)
})

app.listen(3000)
