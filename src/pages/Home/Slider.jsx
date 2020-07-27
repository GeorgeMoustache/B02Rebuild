import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SliderComp = styled.div`
  a {
    display: block;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const SliderComponent = ({sliderList}) => {
  return (
    <SliderComp>
      <Slider
        arrows={false}
        dots={false}
        autoplay={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {sliderList.map((item, idx) => {
          return (
            <a href={item.linkUrl} key={idx}>
              <img src={item.imgUrl} alt={item.title} />
            </a>
          )
        })}
      </Slider>
    </SliderComp>
  )
}

export default SliderComponent
