/*
 * @Author: your name
 * @Date: 2020-07-02 16:46:02
 * @LastEditTime: 2020-07-02 16:46:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\script2.js
 */ 
self.addEventListener('message', function(e) {
    var data = e.data
    switch(data.cmd) {
        case 'start':
            self.postMessage('WORKER2 STARTED: ' + data.msg);
            break;
        case 'stop':
            self.postMessage('WORKER2 STOPPED: ' + data.msg);
            self.close(); // Terminates the worker.
            break;
        default:
            self.postMessage('Unknown command: ' + data.msg);
    }
}, false)