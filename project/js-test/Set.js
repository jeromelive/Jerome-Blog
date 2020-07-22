/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-07-22 11:16:55
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-07-22 11:20:43
 */ 
let array = [1,2,3,4,5,65,6,7,7,5,4,2]
let set = new Set(array)
console.log([...set])

// for...of... 遍历 Set
for(let val of set) {
  console.log(val)
}
