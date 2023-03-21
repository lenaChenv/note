import { defineUserConfig, defaultTheme } from 'vuepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"

export default defineUserConfig({
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/note',
    theme:defaultTheme ({
        navbar: [
            { text: 'Home', link: '/' },
            {
                text: 'Guide',
                children: [
                '/guide/Javascript.md','/guide/Vue.md','/guide/React.md','/guide/Typescript.md', '/guide/Webpack.md','/guide/Redux.md'
                ]
            },
            { text: 'Github', link: 'https://google.com' },
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
        smoothScroll: true
    }),
    plugins: [
        mdEnhancePlugin({
          codetabs: true,
          mark: true,
        }),
      ],
})

