const getConfig = require("vuepress-bar");
const prefix = "docs"
const { sidebar } = getConfig(prefix, { 'pinyinNav': true })

const config =  {
  "title": "白日梦想家.笔记",
  "description": "",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "@wuchuhengtools/vuepress-theme-reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "link": "/docs/catalogue"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/wuchuheng/notebook",
            "icon": "reco-github"
          }
        ]
      },
    ],
    // sidebar: newSidebar,
    mode: 'dark',
    subSidebar: 'auto',
    "sidebar": {
      "/docs/": [
          ...sidebar,
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "白日梦想家.笔记",
    "authorAvatar": "/avatar.png",
    record: '粤ICP备17071471号-2',
    recordLink: 'https://beian.miit.gov.cn',
    "startYear": "2017",
  },
  plugins: [
    ['@vuepress-reco/comments', {
      solution: 'valine',
      options: {
        appId: '0U1XAhKqVw8K59iwS97wyykp-gzGzoHsz',
        appKey: 'ymUAfzBTqKsW6y4dinkORQbm'
      }
    }],
      ['@vuepress-reco/vuepress-plugin-bgm-player', {
        audios: [
          {
            name: 'Yesterday once more',
            artist: 'R.I.P Karen Carpenter',
            url: 'https://qiniu.wuchuheng.com/picgo/yesterday_once_more.mp3',
            cover: 'https://qiniu.wuchuheng.com/picgo/hqdefault.jpeg'
          },
          {
            name: 'Careless Whispers',
            artist: 'George Michael',
            url: 'https://qiniu.wuchuheng.com/mp3/3619073933.mp3',
            cover: 'https://qiniu.wuchuheng.com/mp3/20210815193624.png'
          },
        ]
      }],
      'permalink-pinyin'
  ],
  "markdown": {
    "lineNumbers": true
  }
}
module.exports = config