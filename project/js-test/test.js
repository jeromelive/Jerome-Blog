/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-07-28 20:22:59
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-07-28 21:07:32
 */ 

console.log(false && 1 && []) // false
console.log(" " && true && 5) // 5

true && console.log('1') // 1
false && console.log('2') // 不打印东西

console.log(null || 1 || undefined) // 1
function test(name) {
  let temp = name || 'jerome'
  console.log(temp)
}
test() // jerome
test('pig') //pig

console.log(!!'') // false
console.log(!!0) // false
console.log(!!1) // true
console.log(!!'2') // true