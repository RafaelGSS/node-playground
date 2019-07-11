// This is an example of bad usage "async" functions and a good example to use process.nextTick

const fs = require('fs')

// Incorrect Usage
function fileSizeIncorrect (fileName, cb) {
  if (typeof fileName !== 'string') {
    return cb(new TypeError('argument should be string'))
  }

  fs.stat(fileName, (err, stats) => {
    if (err) {
      return cb(err)
    }
    cb(null, stats.size)
  })
}

// async function of fileSizeIncorrect
async function fileSizeAsync (fileName, cb) {
  fileSizeIncorrect(fileName, cb)
}


// Correct Usage
function fileSizeCorrect (fileName, cb) {
  if (typeof fileName !== 'string') {
    return process.nextTick(
      cb,
      new TypeError('argument should be string')
    )
  }

  fs.stat(fileName, (err, stats) => {
    if (err) {
      return cb(err)
    }
    cb(null, stats.size)
  })
}

const fileSize = process.env.CORRECT ?
  fileSizeCorrect : process.env.ASYNC ?
    fileSizeAsync : fileSizeIncorrect

const fileName = eval(process.argv.slice(2)[0]) || __filename

fileSize(fileName, (err, size) => {
  if (err) throw err

  console.log(`Size in KB: ${size / 1024}`)
})

console.log('If your function is designed correctly, this should print')