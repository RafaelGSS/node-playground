/**
 * This module shows that LIBUV do not delegates HTTP request to thread pool, instead of this, 
 * delegate to OS System that manager how much threads use
 */

const https = require('https')

const start = Date.now()

function doReq() {
    https.request('https://google.com', res => {
        res.on('data', _ => {})
        res.on('end', _ => {
            console.log(Date.now() - start)
        })
    }).end()
}

doReq()
doReq()
doReq()
doReq()
doReq()
doReq()
doReq()
doReq()
