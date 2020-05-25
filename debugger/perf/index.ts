import * as Fastify from 'fastify'

const server = Fastify({ logger: true });

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  })
}

server.get('/', async (request, reply) => {
  await sleep(1000)
  return { ok: true }
})

server.listen(3000)
