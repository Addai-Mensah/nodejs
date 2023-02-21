// const logger = require ("./logger.js");
 
// logger.log("message")
// const path = require('path')

// const pathObj = path.parse(__filename)
// console.log(pathObj)



// const os = require('os')

// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

const fs = require ('fs')
fs.readdir('./', function(err,files){
    if (err) console.log("err",err)
    else console.log('Result', files )
})

const fs = require ('fs')
fs.readdir('./', function(err,file){
    if (err) console.log('err',err)
    else console.log('Result',file)
})






// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('messageLogged', (arg) => {
//     console.log('listener called',arg);
// })
// emitter.emit('messageLogged',{id:1, url: 'https://'});



// const EventEmitter = require('events')

// const Logger = require('./logger')
// const logger = new Logger()

// // Rgister a listener
// logger.on('messageLogged',(arg) =>{
//     console.log("Listener called",arg );
//     })

// logger.log('message')

const http = require('http');
const server = http.createServer() 

