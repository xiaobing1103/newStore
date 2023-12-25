const tabList = [
  {
    title: "发现音乐",
    id: 1,
    show: true,
    children: [
      { title: "推荐", id: 11 },
      { title: "排行榜", id: 12 },
      { title: "歌单", id: 13 },
      { title: "主播电台", id: 14 },
      { title: "歌手", id: 15 },
      { title: "新碟上架", id: 16 },
    ],
  },
  {
    title: "我的音乐",
    id: 2,
    show: false,
    children: [
      { title: "流行", id: 11 },
      { title: "二次元", id: 12 },
      { title: "古風", id: 13 },
      { title: "古典樂", id: 14 },
      { title: "经典老歌", id: 15 },
      { title: "dj", id: 16 },
    ],
  },
  {
    title: "关注",
    id: 3,
    show: false,
    children: [
      { title: "羽泉组合", id: 11 },
      { title: "吴莫愁", id: 12 },
      { title: "林俊杰", id: 13 },
      { title: "akb48", id: 14 },
      { title: "乃木坂46", id: 15 },
      { title: "周杰伦", id: 16 },
    ],
  },
  {
    title: "商城",
    id: 4,
    show: false,
    children: [
      { title: "歌手周边", id: 11 },
      { title: "手办", id: 12 },
      { title: "专辑", id: 13 },
      { title: "光碟", id: 14 },
      { title: "歌手同款", id: 15 },
      { title: "歌手推荐", id: 16 },
    ],
  },
  {
    title: "音乐人",
    id: 5,
    show: false,
    children: [
      { title: "王磊", id: 11 },
      { title: "大张伟", id: 12 },
      { title: "陶喆", id: 13 },
      { title: "薛之谦", id: 14 },
      { title: "陈奕迅", id: 15 },
      { title: "毛不易", id: 16 },
    ],
  },
  {
    title: "云推歌",
    id: 6,
    show: false,
    children: [
      { title: "消愁", id: 11 },
      { title: "Music of cats", id: 12 },
      { title: "像我这样的人", id: 13 },
      { title: "她说", id: 14 },
      { title: "江南", id: 15 },
      { title: "美人鱼", id: 16 },
    ],
  },
  {
    title: "下载客户端",
    id: 7,
    children: [
      { title: "ios端", id: 11 },
      { title: "Android端", id: 12 },
      { title: "windows", id: 13 },
    ],
  },
];

const newsBox = [
  {
    title: "热门推荐",
    titleCate: [
      { title: "华语", href: "/huayu" },
      { title: "流行", href: "/liuxing" },
      { title: "摇滚", href: "/yaogun" },
      { title: "民谣", href: "/minyao" },
      { title: "电子", href: "/dianzi" },
    ],
    hotSongs: [
      {
        playerNum: "112万",
        desc: "温暖圣诞夜 | 寒冬里的浪漫,藏在圣诞旋律里",
        imgSrc:
          "http://p1.music.126.net/q8VTUrbXEkq9A9cEZMZP2Q==/109951169210684743.jpg?param=140y140",
      },
      {
        playerNum: "2724万",
        desc: "「看书学习」在安静的位置看热闹的世界",
        imgSrc:
          "http://p1.music.126.net/TacJxbYVjD0vc7Nrn5FzUQ==/109951163557993210.jpg?param=140y140",
      },
      {
        playerNum: "2471万",
        desc: "【妖气弥漫】那些妖异的古风歌曲",
        imgSrc:
          "http://p1.music.126.net/JZguHNVDUvmo0rjhQVYjiA==/3405187517388215.jpg?param=140y140",
        isHot: true,
      },
      {
        playerNum: "51839",
        title: "电台节目",
        desc: "先导小剧场·回应",
        imgSrc:
          "http://p1.music.126.net/cInclr1wJp6OZJtZ50ZUmw==/109951169012060931.jpg?param=140y140",
      },

      {
        playerNum: "4270万",
        desc: "【R&B】慵懒的感觉非常舒服",
        imgSrc:
          "http://p1.music.126.net/JKiCDG-xfj203gcui2z6aA==/109951163139073602.jpg?param=140y140",
      },

      {
        playerNum: "12140",
        title: "电台节目",
        desc: "和电影《三大队》的原著作者深蓝聊聊执念与追凶",
        imgSrc:
          "http://p1.music.126.net/3sWQrfQDc-UbcbO5zZA4gQ==/109951169174188775.jpg?param=140y140",
      },

      {
        playerNum: "2672万",
        desc: "还记得你的梦想吗？别让你的梦只有想",
        imgSrc:
          "http://p1.music.126.net/c-u3kOlkVTUf4JdeDHDdEw==/109951163291871252.jpg?param=140y140",
      },

      {
        playerNum: "78万",
        ishot: "电台节目",
        desc: "【G5春日列车】魔法密林丨氛围场景学习bgm",
        imgSrc:
          "http://p1.music.126.net/Fn0t-nlyyjAsq3eTSrJhYg==/109951167857262335.jpg?param=140y140",
      },

      {
        playerNum: "10948万",
        isHot: true,
        desc: "那些你熟悉却又不知道名字的轻音乐",
        imgSrc:
          "http://p1.music.126.net/8fQ9jzTJnMweLNm7VoyPSw==/6623458045881301.jpg?param=140y140",
      },

      {
        playerNum: "78万",
        isHot: true,
        desc: "『耳机福利』左右耳已跪",
        imgSrc:
          "http://p1.music.126.net/cFEn-P8Dr4_oVJqxXCQjXQ==/7931876885323415.jpg?param=140y140",
      },
    ],
  },
];
