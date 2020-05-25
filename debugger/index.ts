function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  })
}

async function process1(): Promise<void> {
  await sleep(5000);
  for (let i = 0; i < 1000; i += 1) {
    console.log('Processing something');
    await sleep(10);
  }
}

(async () => {
  Promise.all([
    process1(),
    process1(),
    process1(),
  ])
})();
