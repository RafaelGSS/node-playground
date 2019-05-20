/**
 * That sample shows how the FS ReadFile - OS System pending
 */

const https = require('https')
const crypto = require('crypto')
const fs = require('fs')

const start = Date.now()

function doReq() {
    https.request('https://google.com', res => {
        res.on('data', _ => { })
        res.on('end', _ => {
            console.log(Date.now() - start)
        })
    }).end()
}

function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('Hash:', Date.now() - start)
    })
}

doReq()

fs.readFile('multitask.js', 'utf8', () => {
    console.log('FS:', Date.now() - start)
})

doHash()
doHash()
doHash()
doHash()

/**
 * The FS Module makes use of the thread pool with crypto
 */

//  That ocurred like:

//  fs.readFile requires informations about Hard Driver, so, based on these workflow:


//  - Node Requires some stats about hard driver before read file - PAUSE

//  - HD accessed, stats returned

//  - Node Require to read the file - PAUSE

//  - HD accessed, file contents streamed back to app 

//  - Node retuns file contents


//  Based on these pauses, the Thread Pool is waiting, so get the next task and process the returns of Hard Drive file 
//  after some thread available to next task

// BECAUSE OF THIS, doHash finish first than FS 