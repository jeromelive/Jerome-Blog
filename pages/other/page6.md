<!--
 * @Author: your name
 * @Date: 2020-06-02 17:57:03
 * @LastEditTime: 2020-06-02 17:59:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Jerome-Blog\pages\other\page6.md
--> 
# localStorage

## 设置 `localStorage` 失效时间

```js
const foowwLocalStorage = {
    set: function (key, value, ttlms) {
        var data = { value: value, expirse: new Date(ttlms).getTime() }
        window.localStorage.setItem(key, JSON.stringify(data))
    },
    get: function (key) {
        var data = JSON.parse(window.localStorage.getItem(key))
        if (data !== null) {
            if (data.expirse != null && data.expirse < new Date().getTime()) {
                window.localStorage.removeItem(key)
            } else {
                return data.value
            }
        }
        return null
    }
}

// 设置localStorage的值
// 设置失效时间为当天23:59:59:9999
var date = new Date(new Date().setHours(23, 59, 59, 999)).getTime()
foowwLocalStorage.set('GUIPEFIRST', new Date().getTime(), date)
//获取localStorage的值
var data = foowwLocalStorage.get("test");
```