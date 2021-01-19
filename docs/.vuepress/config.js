module.exports = {
    title:"lgz blog",
    description:"lgz 个人网站",
    head:[
        // 注入到当前页面的 HTML <head> 中的标签
        ['link',{rel:"icon",href:"/img/favicon.ico"}]// 增加一个自定义的 favicon(网页标签的图标)
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 这是部署到github相关的配置 
    markdown:{lineNumber:false},
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            { title: 'Foo', path: '/foo' },
            { title: 'Bar', path: '/bar' }
        ]
    }
};