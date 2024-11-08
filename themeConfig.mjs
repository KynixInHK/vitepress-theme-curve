import { link } from "fs";
import { text } from "stream/consumers";

// 主题配置
export const themeConfig = {
  // 站点信息
  siteMeta: {
    // 站点标题
    title: "陳叔叔的部落格",
    // 站点描述
    description: "追尋所愛的生活和世界",
    // 站点logo
    logo: "/images/logo/logo.webp",
    // 站点地址
    site: "https://blog.kynix.tw",
    // 语言
    lang: "zh-TW",
    // 作者
    author: {
      name: "Adrian Chen",
      cover: "/images/logo/logo.webp",
      email: "kynix@kynix.tw",
      link: "https://www.kynix.tw/",
    },
  },
  // 备案信息
  // icp: "萌ICP备114514号",
  // 建站日期
  since: "2024-11-06",
  // 每页文章数据
  postSize: 8,
  // inject
  inject: {
    // 头部
    // https://vitepress.dev/zh/reference/site-config#head
    header: [
      // favicon
      ["link", { rel: "icon", href: "/logo.svg" }],
      // RSS
      [
        "link",
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "RSS",
          href: "https://blog.imsyy.top/rss.xml",
        },
      ],
      // 预载 CDN
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://s1.hdslb.com",
        },
      ],
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://mirrors.sustech.edu.cn",
        },
      ],
      // HarmonyOS font
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css",
        },
      ],
      // iconfont
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://cdn2.codesign.qq.com/icons/g5ZpEgx3z4VO6j2/latest/iconfont.css",
        }
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "//at.alicdn.com/t/c/font_4737158_p1zfxjboq4j.css",
        }
      ],
      // Embed code
      ["link", { rel: "preconnect", href: "https://use.sevencdn.com" }],
      ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
      [
        "link",
        {
          crossorigin: "anonymous",
          href: "https://use.sevencdn.com/css2?family=Fira+Code:wght@300..700&display=swap",
          rel: "stylesheet",
        },
      ],
      // 预载 DocSearch
      [
        "link",
        {
          href: "https://X5EBEZB53I-dsn.algolia.net",
          rel: "preconnect",
          crossorigin: "",
        },
      ],
    ],
  },
  // 导航栏菜单
  nav: [
    {
      text: "文章",
      items: [
        { text: "文章列表", link: "/pages/archives", icon: "article" },
        { text: "全部分類", link: "/pages/categories", icon: "folder" },
        { text: "全部標籤", link: "/pages/tags", icon: "hashtag" },
      ],
    },
    {
      text: "友情鏈接",
      items: [
        { text: "友鏈列表", link: "/pages/friends", icon: "fish" },
        { text: "友鏈申請", link: "/pages/link", icon: "people" },
      ]
    },
    {
      text: "協議",
      items: [
        { text: "版權協議", link: "/pages/cc", icon: "accessible" },
        { text: "隱私政策", link: "/pages/privacy", icon: "privacy" }
      ]
    },
    {
      text: "關於我",
      items: [
        { text: "致謝名單", link: "/pages/thanks", icon: "reward" },
        { text: "關於本站", link: "/pages/about", icon: "contacts" },
      ],
    },
  ],
  // 导航栏菜单 - 左侧
  navMore: [
    {
      name: "我",
      list: [
        {
          icon: "/images/imgs/vite.svg",
          name: "主站",
          url: "https://www.kynix.tw/",
        },
        {
          icon: "/images/logo/logo.svg",
          name: "部落格",
          url: "/",
        },
      ],
    },
    {
      name: "服務",
      list: [
        {
          icon: "/images/imgs/portainer.svg",
          name: "Docker 監測",
          url: "https://docker.kynix.tw/",
        },
        {
          icon: "/images/imgs/jellyfin.svg",
          name: "我的 Jellyfin",
          url: "https://jellyfin.axiomatrix.org/",
        },
        {
          icon: "/images/imgs/music.svg",
          name: "我的 Music",
          url: "https://musicbase.axiomatrix.org/",
        },
      ],
    },
  ],
  // 页脚信息
  footer: {
    // 社交链接（请确保为偶数个）
    social: [
      {
        icon: "tmemail",
        link: "mailto:kynix@kynix.tw",
      },
      {
        icon: "github-line",
        link: "https://www.github.com/KynixInHK/",
      },
      {
        icon: "telegram-line",
        link: "https://t.me/kynixtw",
      },
      {
        icon: "facebook",
        link: "https://www.facebook.com/profile.php?id=100084690546631",
      },
      {
        icon: "instagram",
        link: "https://www.instagram.com/kynixtw/",
      },
      {
        icon: "tuite",
        link: "https://twitter.com/kynixtw",
      },
    ],
  },
  // 评论
  comment: {
    enable: true,
    // 评论系统选择
    // artalk / twikoo
    type: "twikoo",
    // artalk
    // https://artalk.js.org/
    artalk: {
      site: "",
      server: "",
    },
    // twikoo
    // https://twikoo.js.org/
    twikoo: {
      // 必填，若不想使用 CDN，可以使用 pnpm add twikoo 安装并引入
      js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/twikoo/1.6.39/twikoo.all.min.js",
      envId: "https://twikoo-kynix.netlify.app/.netlify/functions/twikoo",
      // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
      region: "",
      lang: "zh-TW",
    },
  },
  // 侧边栏
  aside: {
    // 站点简介
    hello: {
      enable: true,
      text: "歡迎造訪陳叔叔的部落格。本部落格由 Adrian Chen 運營，基於 VitePress。本部落格之文章關之技術、醫學與雜談。歡迎反饋！",
    },
    // 目录
    toc: {
      enable: true,
    },
    // 标签
    tags: {
      enable: true,
    },
    // 倒计时
    countDown: {
      enable: true,
      // 倒计时日期
      data: {
        name: "春節",
        date: "2025-01-29",
      },
    },
    // 站点数据
    siteData: {
      enable: true,
    },
  },
  // 友链
  friends: {
    // 友链朋友圈
    circleOfFriends: "",
    // 动态友链
    dynamicLink: {
      server: "",
      app_token: "",
      table_id: "",
    },
  },
  // 音乐播放器
  // https://github.com/imsyy/Meting-API
  music: {
    enable: false,
    // url
    url: "https://api-meting.example.com",
    // id
    id: 9379831714,
    // netease / tencent / kugou
    server: "netease",
    // playlist / album / song
    type: "playlist",
  },
  // 搜索
  // https://www.algolia.com/
  search: {
    enable: false,
    appId: "",
    apiKey: "",
  },
  // 打赏
  rewardData: {
    enable: false,
    // 微信二维码
    wechat: "https://pic.efefee.cn/uploads/2024/04/07/66121049d1e80.webp",
    // 支付宝二维码
    alipay: "https://pic.efefee.cn/uploads/2024/04/07/661206631d3b5.webp",
  },
  // 图片灯箱
  fancybox: {
    enable: true,
    js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.umd.min.js",
    css: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.min.css",
  },
  // 外链中转
  jumpRedirect: {
    enable: true,
    // 排除类名
    exclude: [
      "cf-friends-link",
      "upyun",
      "icp",
      "author",
      "rss",
      "cc",
      "power",
      "social-link",
      "link-text",
      "travellings",
      "post-link",
      "report",
      "more-link",
      "skills-item",
      "right-menu-link",
      "link-card",
    ],
  },
  // 站点统计
  tongji: {
    "51la": "",
  },
};
