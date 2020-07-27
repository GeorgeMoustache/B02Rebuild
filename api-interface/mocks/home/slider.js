/**
 * 首頁 - 大圖輪播
 *
 * @url home/slider
 */

module.exports = (req) => {
  return {
    code: 0,
    message: "成功",
    data: {
      list: [
        {
          id: 1,
          title: '迎新首存，積分兌換盡享奢華',
          imgUrl: '/static/images/home/banner/banner_1.png',
          linkUrl: '#', 
        },
        {
          id: 2,
          title: '推薦好友，邁向財務自由',
          imgUrl: '/static/images/home/banner/banner_2.png',
          linkUrl: '#', 
        },
        {
          id: 3,
          title: '智慧理財，拿彩金',
          imgUrl: '/static/images/home/banner/banner_3.jpg',
          linkUrl: '#', 
        },
      ]
    }
  }
}
