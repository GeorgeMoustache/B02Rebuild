import axios from 'axios'
import * as url from './urlConfig'

const api = axios.create({
  header: 'content-Type: application/json',
  token: 'George'
})

export const fetchApi = {
  // 系統資訊
  config() {
    return api.get(url.config)
  },
  // ===== 首頁部份 ===== //
  // 大圖輪播
  homeSlider() {
    return api.get(url.slider)
  },
  // 跑馬燈
  homeMarquee() {
    return api.get(url.marquee)
  },
  // 熱門遊戲
  homeHotGame() {
    return api.get(url.hotGame)
  },
  // 最愛遊戲
  homeFavoriteGame() {
    return api.get(url.favoriteGame)
  }
}