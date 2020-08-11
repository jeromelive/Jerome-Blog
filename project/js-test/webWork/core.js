/*
 * @Author: your name
 * @Date: 2020-07-02 17:20:01
 * @LastEditTime: 2020-07-02 20:24:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\core.js
 */ 
onmessage = getStart;
function getStart(event) {
    console.log(`${name} ${event.data}`)
    onmessage = getEnd;
}

function getEnd(event) {
    console.log(`${name} ${event.data}`)
    end = event.data;
    onmessage = null;
    work();
}

function work() {
  postMessage(name);
  close();
}