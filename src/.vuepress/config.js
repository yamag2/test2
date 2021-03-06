module.exports = {
    title: 'DORASU Tech. BLOG',
    description: 'DORASU技術チームのブログ',
    locales: {
      '/': {
        lang: 'ja-JP',
      },
    },
  
    // Theme to use
    theme: 'meteorlxy',
    themeConfig: {
      lang: 'ja-JP',
      personalInfo: {
        // Nickname
        nickname: 'DRASU Tech.',
        description: 'チームDORASU技術部',
        email: 'tech@dorasu.com',
        avatar: 'https://www.meteorlxy.cn/assets/img/avatar.jpg',
        sns: {
          github: {
            account: 'dorasu-tech',
            link: 'https://github.com/dorasu-tech/',
          },
          facebook: {
            account: 'DorasuCorp',
            link: 'https://www.facebook.com/DorasuCorp',
          },
          twitter: {
            account: '@DorasuCorp',
            link: 'https://twitter.com/DorasuCorp',
          },
        },
      },
 
head: [
  ['link', { href: '/css/style.css', rel: 'stylesheet'}]
],
 
      header: {
        background: {
          useGeo: true,
        },
        showTitle: true,
      },
  
      footer: {
        poweredBy: true,
        poweredByTheme: true,
      },
  
      infoCard: {
        headerBackground: {
          useGeo: true,
        },
      },
  
      lastUpdated: false,
  
      nav: [
        { text: 'Home', link: '/', exact: true },
        { text: 'Posts', link: '/posts/', exact: false },
      ],
  
      comments: false,
  
      pagination: {
        perPage: 5,
      },
  
      defaultPages: {
        home: true,
        posts: true,
      },
    },

  }