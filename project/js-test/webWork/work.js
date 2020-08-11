/*
 * @Author: your name
 * @Date: 2020-07-02 16:27:18
 * @LastEditTime: 2020-07-02 20:25:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \undefinedc:\Users\zhaojunyun-jk\Desktop\work.js
 */ 
// self.addEventListener('message', function(e) {
//     self.postMessage('You said: ' + e.data)
// }, false)
// self.onmessage(function() {
//     self.postMessage('You said: ' + e.data)
// })

// importScripts('script1.js', 'script2.js')
// self.addEventListener('message', function(e) {
//     var data = e.data
//     switch(data.cmd) {
//         case 'start':
//             self.postMessage('WORKER STARTED: ' + data.msg);
//             break;
//         case 'stop':
//             self.postMessage('WORKER STOPPED: ' + data.msg);
//             self.close(); // Terminates the worker.
//             break;
//         default:
//             self.postMessage('Unknown command: ' + data.msg);
//     }
// }, false)

// self.onmessage = function(e) {
//     var uInt8Array = e.data
//     postMessage('Inside worker.js: uInt8Array.toString() = ' + uInt8Array.toString());
//     postMessage('Inside worker.js: uInt8Array.byteLength = ' + uInt8Array.byteLength);
// }

var num = 10

var result = 0
for(var i = 0; i < num; i += 1) {
    var worker = new Worker('core.js', {name: i})
    worker.postMessage('start')
    worker.postMessage('end')
    worker.onmessage = storeResult
}

function storeResult() {
    ++result;
    if (result >= 10)
      postMessage('finished'); // finished!
}