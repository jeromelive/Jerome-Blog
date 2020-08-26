<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-11 10:29:41
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-08-26 11:13:56
-->
# 国际化

## 一、概要
当前越来越多的项目都需要具备国际化的能力，本章主要讲解使用 Vue 框架下如何使用 `vue-i18n` 去解决国际化和编写一个国际化工具。

## 二、vue-i18n 使用
`vue-i18n` 一款被广泛使用的国际化插件，使用起来也比较简单，代码如下:
```js
// src/lang/en_us.js
export default {
  app: {
    hello: 'Hello,Wolrd!'
  },
  name: 'jerome'
}

// src/lang/zh_cn.js
export default {
  app: {
    hello: '你好，世界！'
  },
  name: '招'
}

// src/lang/index.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './en_us'
import zhLocale from './zh_cn'

Vue.use(VueI18n)
const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...zhLocale
  }
}

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'zh',  // 设置默认语言
  messages: messages // 设置资源文件对象
})

export i18n

// src/main.js
import Vue from 'vue'
import {i18n} from './lang'

console.log('当前的语言是：', i18n.locale)

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')

// src/view/home.vue
<template>
  <p>{{$t('app.hello')}}</p>
  <p>{{$t('name')}}</p>
</template>

<script>
  export default {
    methods: {
      // 调用 change 方法即可改变 DOM
      change(str) {
        this.$i18n.locale = str
    }
  }
</script>
```

## 三、实现一个国际化插件
思路是创建一个含 `Vue` 实例 `_vm` 的 `Lang` 对象，`Lang` 对象的 `locale` 和 `messages` 与 `_vm` 实现代理关系，`DOM` 上的渲染函数会触发 `_vm` 收集依赖，如果 `Lang` 对象的 `locale` 或 `messages` 发生变化会触发依赖运行.
```js
let Vue
const mixins = {
  beforeCreate () {
    const options = this.$options
    if(options.i18n) {
      if(options.i18n instanceof ZjyLang) {
        this._i18n = options.i18n
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof ZjyLang) {
      this._i18n = this.$root.$i18n
    } else if(options.parent && options.parent.$i18n && options.parent.$i18n instanceof ZjyLang) {
      this._i18n = options.parent.$i18n
    }
  }
}

const ZjyLang = function(options) {
  const locale = options.locale || 'en-US'
  const messages = options.messages || {}
  this._initVM({locale, messages})
  Object.defineProperty(this, 'locale', {
    enumerable: true,
    configurable: true,
    get() {
      return this._vm.locale
    },
    set(locale) {
      this._vm.$set(this._vm, 'locale', locale)
    }
  })
  Object.defineProperty(this, 'messages', {
    enumerable: true,
    configurable: true,
    get() {
      return this._vm.messages
    },
    set(messages) {
      this._vm.$set(this._vm, 'messages', messages)
    }
  })
}

ZjyLang.install = function (_Vue) {
  ZjyLang.install.installed = true
  Vue = _Vue
  Vue.mixin(mixins)
  extend(Vue)
  
  const strats = Vue.config.optionMergeStrategies
  strats.i18n = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  }
}

ZjyLang.prototype._initVM = function (data) {
  const silent = Vue.config.silent
  Vue.config.silent = true
  this._vm = new Vue({ data })
  Vue.config.silent = silent
}

ZjyLang.prototype._t = function(path, _locale, messages) {
  try {
    let paths = path.split('.')
    let temp = messages[_locale]
    let i = 0
    while (i < paths.length) {
      temp  = temp[paths[i]]
      i++
    }
    return temp || path
  } catch (err) {
    console.warn(err)
    return path
  }
}

function extend(Vue) {
  if (!Vue.prototype.hasOwnProperty('$i18n')) {
    Object.defineProperty(Vue.prototype, '$i18n', {
      get () { 
        return this._i18n 
      }
    })
  }

  Vue.prototype.$t = function (key) {
    const i18n = this.$i18n
    return i18n._t(key, i18n.locale, i18n.messages)
  }
}

export default ZjyLang
```

## 四、总结
通过 Vue 的基础原来实现了国际化工具