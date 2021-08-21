const getConfig = require("vuepress-bar");
const prefix = "docs"
const {sidebar} = getConfig(prefix, {'pinyinNav': true})

const config = {
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
    "theme": "reco",
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
                "link": "/docs/1.catalogue"
            },
            {
                "text": "tools",
                "icon": "reco-other",
                "link": "/docs/gong-ju-ku/1.shu-ju-ku-gong-ju"
            },

        ],
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: 'Categories' // 默认 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: 'Tags' // 默认 “标签”
            },
            socialLinks: [
                { icon: 'reco-github', link: 'https://github.com/wuchuheng' },
                { icon: 'reco-mail', link: 'mailto:root@wuchuheng.com' },
                { icon: 'reco-npm', link: 'https://www.npmjs.com/~wuchuheng' }
            ]
        },
        // sidebar: newSidebar,
        mode: 'dark',
        subSidebar: 'auto',
        "sidebar": {
            "/docs/": [
                ...sidebar,
            ]
        },
        "type": "blog",
        "friendLink": [
            {
                "title": "linux运维笔记",
                "desc": "linux服务端运维笔记",
                "link": "https://linuxeye.com/"
            },
            {
                "title": "Siyuan's Blog",
                "desc": "一位专注到算法的大佬",
                "avatar": "https://hydingsy.github.io/images/avatar.png",
                "link": "https://hydingsy.github.io/"
            },
            {
                "title": "xargin Blog",
                "desc": "服务端和架构等文章质量很好",
                "link": "https://xargin.com/"
            },
            {
                "title": "开源程序书籍",
                "desc": "github开源书籍，我收藏了等于我会了",
                "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
                "link": "https://ebookfoundation.github.io/free-programming-books/"
            },
            {
                "title": "赖经纬 Blog",
                "desc": "一位对互联技术很感兴趣的前端开发员，涉及广泛且前卫，出手专业，对新出技术有着异常灵敏的嗅觉, 值得学习",
                "avatar": "https://laijw.com/images/avatar.png",
                "link": "https://laijw.com/"
            },
            {
                "title": "阮一峰 blog",
                "desc": "国内前端一哥博客，技术和眼界十分了得，文章深入浅出，国内前端风向标，十分值得学习",
                "link": "https://www.ruanyifeng.com/blog/"
            },
            {
                "title": "SHUWOOM's blog",
                "desc": "全栈技术博客，能深入到后端技术原理和前端技术应用，十分了得，很值得学习",
                "link": "https://shuwoom.com/"
            },
            {
                "title": "极市开发者社区",
                "desc": "国内人工智能图像处理开发社区，涉及技术论文，算法实现和案例等",
                "link": "https://www.ruanyifeng.com/blog/"
            },
            {
                "title": "IoT development",
                "desc": "IBM IoT开发者社区",
                "link": "https://developer.ibm.com/learningpaths/iot-getting-started-iot-development//"
            },
            {
                "title": "老李秀社区",
                "desc": "自我标榜\"可能是东半球最好的php程序员\"， 其实力可见一斑",
                "link": "https://developer.ibm.com/learningpaths/iot-getting-started-iot-development//"
            },
            {
                "title": "golang学习笔记",
                "desc": "十分全面，十分专业，非常值得反复查看，很专业的golang学习笔记,非常值得学习",
                "link": "http://www.topgoer.com/"
            },
            {
                "title": "golang学习笔记",
                "desc": "十分全面，十分专业，非常值得反复查看，很专业的golang学习笔记,非常值得学习",
                "link": "http://www.topgoer.com/"
            },
            {
                "title": "无双 blog",
                "desc": "很厉害的开发者，文章对于后端的技术原理深入浅出，十分了得，非常值得学习",
                "link": "https://leaxoy.github.io/",
                "avatar": "https://leaxoy.github.io/images/avatar.png"
            },
            {
                "title": "耗子叔 blog",
                "desc": "编程领域教父般的人物，一位有着20年开发经验的软件开发员，他写的技术文章自带岁月感，像是一人过来人在诉说着他的故事一样，"
                    + "从小的说，能从编译角度来，深入浅出说出每种开发语言处理机制和区别，从大的说，能根据情况制定可靠稳定的构架，通俗易懂,"
                    + "是一位真正驾驭了技术，而不是被技术驾驭的人，十分了得，非常值得学习",
                "link": "https://coolshell.cn/",
            },
            {
                title: "面向信仰编程 blog",
                desc: "全栈开发员，文章直指技术原理，很值得学习",
                link: "https://draveness.me/"
            },
            {
                title: 'stEve Young Blog',
                desc: '很利害的web开发员',
                link: 'https://buptsteve.github.io/blog/'
            },
            {
                title: '稚晖的个人站',
                desc: '在硬件和软件通吃的男人，一人便可抵上一个团队,涉及硬件和智能并取得了不起的成就品, 十分了得，很值得学习',
                avatar: 'http://www.pengzhihui.xyz/logo.jpg',
                link: 'http://www.pengzhihui.xyz/'
            },
            {
                title: 'appleBoy blog',
                desc: '来自台湾的很了不起的技术员，开源并维持gin等了不起的项目',
                link: 'https://blog.wu-boy.com/'
            },
            {
                title: '寒雁 blog',
                desc: '很利害开发员，文章质量很高，直指原理，很值得学习',
                link: 'https://kiwenlau.com/'
            },
            {
                title: 'rxjs教程',
                desc: '用通俗的方式把rxjs讲明白，很不错的教程，值得学习',
                link: 'https://ithelp.ithome.com.tw/articles/10186104'
            },
            {
                title: '李金深\'s Blog',
                desc: '对前端感兴趣的技术员，有常人没有的细心和耐心，很值得学习',
                link: 'http://www.yemengshen.cn/main'
            },
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
        [require('./plugins/BgMusic/index'), {
            isMini: true,
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
        'permalink-pinyin',
        'fulltext-search'
    ],
    "markdown": {
        "lineNumbers": true
    }
}
module.exports = config