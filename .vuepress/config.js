/*
 * @Author: your name
 * @Date: 2020-05-26 21:53:40
 * @LastEditTime: 2020-06-08 21:06:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Jerome-Blog\.vuepress\config.js
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
                        ['vue/page1.md', 'vue-cli@3.0 相关配置']
                    ]
                },
                {
                    title: '琐碎',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['other/page1.md', '深色模式开发'],
                        ['other/page2.md', '前端安全'],
                        ['other/page3.md', '数字动态累加特效'],
                        ['other/page4.md', '本地缓存静态资源'],
                        ['other/page5.md', '聊聊各种加密以及加密在HTTPS中的应用'],
                        ['other/page6.md', 'localStorage 使用'],
                        ['other/page7.md', 'Canvas'],
                        ['other/page8.md', '实现 IOS 下拉弹性效果与背景']
                    ]
                },
            ]
        }
    }
}