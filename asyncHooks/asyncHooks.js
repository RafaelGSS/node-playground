const Express = require('express')

const app = Express()
const { AsyncLocalStorage } = require('async_hooks')
const context = new AsyncLocalStorage()

app.use((req, res, next) => {
  const store = new Map()
  context.run(store, () => {
    store.set('request', req)
    store.set('response', res)
    next()
  })
})

app.use((error, req, res, next) => {
  return res.end('Sync Error happened!')
})


app.get('/async', () => {
  process.nextTick(_ => {
    throw new Error('exception from async!')
  })
})
app.get('/sync', () => {
  throw new Error('exception from sync!')
})

process.on('uncaughtException', (_error) => {
  const store = context.getStore()
  const res = store.get('response');
  return res.end('async error handled!!');
})

app.listen(3000, () => console.log('running at 3000'))
