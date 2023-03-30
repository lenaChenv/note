import { defineUserConfig, defaultTheme } from 'vuepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"
import { hopeTheme } from "vuepress-theme-hope";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/note',
    theme:hopeTheme ({
        navbar: [
            { text: 'Home', link: '/' },
            {
                text: 'Guide',
                prefix: "/guide/",
                children: [
                'javascript/','vue/','react/','typescript/', 'webpack/','redux/'
                ]
            },
            {
                text: 'Language',
                children: [
                '/language/Japanese.md', '/language/English.md'
                ]
            },
            { text: 'Github', link: 'https://google.com' },
        ],
        sidebar: {
            "/guide/javascript/":"structure",
        },
        iconAssets: "iconfont",
        lastUpdated: 'Last Updated',
        smoothScroll: true
    }),
    plugins: [
        mdEnhancePlugin({
            codetabs: true,
            mark: true,
            demo: true,
            vuePlayground: true,
            // 启用 figure
            figure: true,
            // 启用图片懒加载
            imgLazyload: true,
            // 启用图片标记
            imgMark: true,
            // 启用图片大小
            imgSize: true,
            mathjax: true,
            container: true,
        }),
        searchProPlugin({
            // 索引全部内容
            indexContent: true,
            // 为分类和标签添加索引
            customFields: [
              {
                getter: (page) => page.frontmatter.category,
                formatter: "分类：$content",
              },
              {
                getter: (page) => page.frontmatter.tag,
                formatter: "标签：$content",
              },
            ],
        }),
    ],  
})

