module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/note',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Guide',
                ariaLabel: 'Guide',
                items: [
                { text: 'Javascript', link: '/guide/Javascript/' },
                { text: 'Vue', link: '/guide/Vue/' },
                { text: 'React', link: '/guide/React/' },
                { text: 'Typescript', link: '/guide/Typescript/' },
                { text: 'Webpack', link: '/guide/Webpack/' },
                { text: 'Redux', link: '/guide/Redux/' }
                ]
            },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                { text: 'Chinese', link: '/language/chinese/' },
                { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            { text: 'Github', link: 'https://google.com' },
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
        smoothScroll: true
    }
}