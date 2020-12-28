/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-05-26 21:53:40
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-11-10 19:37:29
 */
module.exports = {
    title: `Jerome's Blog`, // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '前端记录', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/logo.svg' }],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    base: '/Jerome-Blog/',
    dest: 'docs',
    serviceWorker: true,
    themeConfig: {
        logo: '/logo.svg',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            //   {
            //       text: '分类',
            //       ariaLabel: '分类',
            //       items: [
            //           { text: '文章', link: '/pages/folder1/test1.md' },
            //           { text: '琐碎', link: '/pages/folder2/test4.md' },
            //       ]
            //   },
            //   { text: '功能演示', link: '/pages/folder1/test3.md' },
            //   { text: 'Github', link: 'https://github.com/dwanda' },
        ],
        sidebar: {
            '/pages/': [
                {
                    title: 'Vue相关',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['vue/page1.md', 'vue-cli@3.0 相关配置'],
                        ['vue/page2.md', 'directive'],
                        ['vue/page3.md', 'Vue 国际化'],
                        ['vue/page4.md', '动态主题'],
                        ['vue/page5.md', '优化无限滚动加载，再多数据页面也不卡顿']
                    ]
                },
                {
                    title: 'Webpack',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['webpack/page1.md', 'webpack'],
                        ['webpack/page2.md', 'optimization.splitChunks'],
                        // ['webpack/page3.md', 'webpack HMR解析'],
                    ]
                },
                {
                    title: 'Bebel 7',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['babel/page1.md', 'babel 7'],
                        ['babel/page2.md', '@babel/cli'],
                        ['babel/page3.md', 'presets'],
                        ['babel/page4.md', 'plugins'],
                    ]
                },
                {
                    title: '琐碎',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['other/page1.md', 'requestAnimationFrame、requestIdleCallback、IntersectionObserver'],
                        ['other/page2.md', '前端安全'],
                        ['other/page3.md', '数字动态累加特效'],
                        ['other/page4.md', '本地缓存静态资源'],
                        ['other/page5.md', '聊聊各种加密以及加密在HTTPS中的应用'],
                        ['other/page6.md', 'localStorage 使用'],
                        ['other/page7.md', 'Canvas'],
                        ['other/page8.md', '实现 IOS 下拉弹性效果与背景'],
                        ['other/page9.md', 'web worker 前端多线程'],
                        ['other/page10.md', 'Event Loop'],
                        ['other/page11.md', 'Zepto 的 touch 模块'],
                        ['other/page12.md', '基于 Zepto 实现图片放大缩小功能'],
                        ['other/page13.md', '了解 Javascript 深浅克隆'],
                        ['other/page14.md', 'Set 和 Map 数据结构'],
                        ['other/page15.md', 'JavaScript 知识点'],
                        ['other/page16.md', 'head 和 body 内的 JS 区别'],
                        ['other/page17.md', 'JsBridge：Web 和客户端双向通信'],
                        ['other/page18.md', '深入了解 js 柯里化'],
                        ['other/page19.md', 'git 常用操作'],
                        ['other/page20.md', 'flow'],
                    ]
                }
            ]
        }
    }
}