/**
 * 首頁 - 熱門遊戲
 *
 * @url home/hotGame
 */

module.exports = (req) => {
  return {
    code: 0,
    message: "成功",
    data: {
      list: [
        {
          id: 1,
          title: 'VR彩票',
          imgUrl: '/static/images/home/hotGame/game_01.jpg'
        },
        {
          id: 2,
          title: '东方体育',
          imgUrl: '/static/images/home/hotGame/game_02.jpg'
        },
        {
          id: 3,
          title: '幸运棋牌',
          imgUrl: '/static/images/home/hotGame/game_03.jpg'
        },
      ]
    }
  }
}
