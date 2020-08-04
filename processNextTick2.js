const { EventEmitter } = require("events");

class MyConstructor extends EventEmitter {
  constructor() {
    super()
    process.nextTick(() => {
      this._continue();
    });
  }

  _continue() {
    // without the process.nextTick
    // these events would be emitted immediately
    // with no listeners. they would be lost.
    console.log('Data emmited');
    this.emit('data', 'hello');
    this.emit('data', 'world');
    this.emit('end');
  }
}

async function main() {
  const c = new MyConstructor();
  c.on('data', function(data) {
    console.log(data);
  });
  c.on('end', function () { console.log('end') });
  for (let i = 0; i < 250000; i += 1) {
    console.log('runnn', i)
  }
}

main()
