import React from 'react'
import styled from 'styled-components'
import MarqueePlugin from 'react-simple-marquee'

const MarqueeComp = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 10px;
  background: #f5f5f5;
  &::before {
    content: '';
    flex-shrink: 0;
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background: url(${({ theme }) => theme.icons.marquee});
    background-size: 100% auto;
  }
  & button {
    background: none;
    border: none;
    font-size: 13px;
    color: ${({ theme }) => theme.color.grey};
    line-height: 20px;
  }
`

const Marquee = ({ marqueeList }) => {
  //開啟彈窗
  const openDialog = () => {}

  return (
    <MarqueeComp>
      {marqueeList && (
        <MarqueePlugin speed={1} style={{height: 20}}>
          {marqueeList.map((item, idx) => {
            return (
              <button onClick={openDialog(item)} key={idx}>
                {item.content}
              </button>
            )
          })}
        </MarqueePlugin>
      )}
    </MarqueeComp>
  )
}

export default Marquee
