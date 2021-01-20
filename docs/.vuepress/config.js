module.exports = {
    title:"lgz",
    description:"lgz 个人网站",
    theme: '@vuepress/blog',
    head:[
        // 注入到当前页面的 HTML <head> 中的标签
        ['link',{rel:"icon",href:"/favicon.ico"}]// 增加一个自定义的 favicon(网页标签的图标)
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 这是部署到github相关的配置
    pwa: true,
    markdown:{lineNumber:false},
    themeConfig: {
        comment: {
            service: 'vssue', // 有两种disqus和vssue， 我们选择vssue
            owner: 'liguangzeng',
            repo: "liguangzeng.github.io",
            clientId: "858995c050ac5f5acdd0",
            clientSecret: "70e1a95acc3fdba4ac186d1a1026a8ad5377ea66",
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Tag', link: '/tag/'}
        ]
    },
    evergreen:true
};