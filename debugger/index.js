function process1() {
  for(let i = 0; i < 100000; i++){
    console.log('Processing', i)
  }
}

setTimeout(() => {}, 10000)

process1()
const var1 = 'string'
const var2 = 1
const concatVar = var1 + var2
debugger;

setTimeout(() => {}, 5000)
debugger;


setTimeout(() => {}, 5000)
