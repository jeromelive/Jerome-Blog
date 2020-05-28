module.exports = {
    title: '博客', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
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
                    ]
                },
            ]
        }
    }
}