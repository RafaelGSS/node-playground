const p1 = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('one'), 1000);
});
const p2 = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('two'), 2000);
});
const p3 = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('three'), 3000);
});
const p4 = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('four'), 4000);
});

async function example() {
  const start = Date.now()
  await Promise.all([p1(), p2(), p3(), p4()])
  console.log('Example done after:', Date.now() - start)
}

async function exampleSync() {
  const start = Date.now()
  await p1()
  await p2()
  await p3()
  await p4()
  console.log('ExampleSync done after:', Date.now() - start)
}

//example()
exampleSync()
