import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const HotGameComp = styled.div`
  margin-bottom: 10px;
  padding: 15px;
  background: ${({ theme }) => theme.color.white};
  & .main-title {
    margin-bottom: 3px;
    font-size: 18px;
    color: ${({ theme }) => theme.color.black};
    font-weight: bold;
  }
  & .sub-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.color.grey};
    & a {
      font-size: 13px;
      color: ${({ theme }) => theme.color.black};
    }
  }
  & a {
    display: block;
    padding-right: 10px;
    font-size: 14px;
  }
  & img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`

const HotGame = ({ hotGameList }) => {
  return (
    <HotGameComp>
      <div className='main-title'>热门游戏</div>
      <div className='sub-title'>
        当下最热门最火小游戏
        <a href='/'>查看更多</a>
      </div>
      <Slider
        arrows={false}
        dots={false}
        autoplay={false}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        centerMode={true}
        centerPadding={'30px'}
      >
        {hotGameList.map((item, idx) => {
          return (
            <a href={item.linkUrl} key={idx}>
              <img src={item.imgUrl} alt={item.title} />
              {item.title}
            </a>
          )
        })}
      </Slider>
    </HotGameComp>
  )
}

export default HotGame
