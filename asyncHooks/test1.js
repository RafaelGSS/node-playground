require('./async-module')()

setTimeout(() => {
  process.memoryUsage();
}, 0)
console.log('Registered timeout')
