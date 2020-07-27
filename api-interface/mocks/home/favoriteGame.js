/**
 * 首頁 - 最愛遊戲
 *
 * @url home/favoriteGame
 */

module.exports = (req) => {
  return {
    code: 0,
    message: "成功",
    data: {
      list: [
        {
          id: 1,
          title: 'OG真人',
          imgUrl: '/static/images/home/favoriteGame/game_01.jpg'
        },
        {
          id: 2,
          title: '东方体育',
          imgUrl: '/static/images/home/favoriteGame/game_02.jpg'
        },
        {
          id: 3,
          title: 'MW補魚',
          imgUrl: '/static/images/home/favoriteGame/game_03.jpg'
        },
        {
          id: 4,
          title: 'MW電子',
          imgUrl: '/static/images/home/favoriteGame/game_04.jpg'
        },
        {
          id: 5,
          title: 'VR彩票',
          imgUrl: '/static/images/home/favoriteGame/game_05.jpg'
        },
        {
          id: 6,
          title: '幸运棋牌',
          imgUrl: '/static/images/home/favoriteGame/game_06.jpg'
        }
      ]
    }
  }
}
