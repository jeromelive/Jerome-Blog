/*
 * @Author: your name
 * @Date: 2020-07-09 20:46:08
 * @LastEditTime: 2020-07-11 14:28:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Jerome-Blog\project\js-test\index.js
 */ 
const _ = require('lodash')

function chunk(arr, number) {
  const length = Math.ceil(arr.length/number)
  let result = []
  for(let i = 0; i < length; i++) {
    let temp = []
    for(let j = 0; j < number; j++) {
      temp.push(arr[i*number + j])
    }
    result.push(temp)
  }
  return result
}

function compact(arr) {
  let result = []
  let length = arr.length
  let i = 0
  while(i < length) {
    i++
    if(!!arr[i]) result.push(arr[i])
  }
  return result
}

// function concat() {
//   let 
//   let argument
// }

function difference () {
  let first = arguments[0]
  let temp = []
  for(let key in first) {
    let flag = false
    for (let n = 1; n < arguments.length; n++) {
      flag = (arguments[n].indexOf(first[key]) === -1)
      console.log(flag)
      // if (!flag) {
      //   break
      // }
    }
    // if(flag) {
    //   temp.push(first[key])
    // }
    flag && temp.push(first[key])
  }
  return temp
}

// console.log(_.chunk(['a', 'b', 'c', 'd'], 2))
// console.log(chunk(['a', 'b', 'c', 'd'], 2))

// console.log(_.compact(['', 0, NaN, undefined, null, 1, 2]))
// console.log(compact(['', 0, NaN, undefined, null, 1, 2]))

// console.log(_.difference([1,2,3,4,6], [1,2,3,4], [1,2,3,6]))
console.log(difference([1,2,3,4,6], [1,2,3,4], [1,2,3]))