import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
//components
import SliderComponent from './Slider'
import MarqueeComponent from './Marquee'
import HotGameComponent from './HotGame'
import FavoriteGameComponent from './FavoriteGame'
import AppDownloadComponent from './AppDownload'
import PageEnd from '@components/PageEnd'
//api
import { fetchApi } from '@api'

const Container = styled.div`
  padding-bottom: 70px;
`

const Home = () => {
  const [sliderList, setSliderList] = useState([])
  const [marqueeList, setMarqueeList] = useState()
  const [hotGameList, setHotGameList] = useState([])
  const [favoriteGameList, setFavoriteGameList] = useState([])

  useEffect(() => {
    //取得大圖輪播
    fetchApi.homeSlider().then((res) => {
      const list = res.data.data.list
      setSliderList(list)
    })

    //取得跑馬燈內容
    fetchApi.homeMarquee().then((res)=> {
      const list = res.data.data.list
      setMarqueeList(list)
    })

    //取得熱門遊戲
    fetchApi.homeHotGame().then(res => {
      const list = res.data.data.list
      setHotGameList(list)
    })

    //取得最愛遊戲
    fetchApi.homeFavoriteGame().then(res => {
      const list = res.data.data.list
      setFavoriteGameList(list)
    })
  }, [])

  return (
    <Container>
      <SliderComponent sliderList={sliderList} />
      <MarqueeComponent marqueeList={marqueeList} />
      <HotGameComponent hotGameList={hotGameList} />
      <FavoriteGameComponent favoriteGameList={favoriteGameList} />
      <AppDownloadComponent />
      <PageEnd />
    </Container>
  )
}

export default Home
