import React from 'react'
import styled from 'styled-components'

const FavoriteGameComp = styled.div`
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
  & .wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & li {
      width :49%;
      margin-bottom: 4%;
      & a {
        display: block;
        border-radius: 5px;
        overflow: hidden;
        & img {
          display: block;
          width: 100%;
          height: auto;
        }
      }
    }
  }
`

const FavoriteGame = ({ favoriteGameList }) => {
  return (
    <FavoriteGameComp>
      <div className='main-title'>玩家最爱</div>
      <div className='sub-title'>
        最齐全的游戏福利入口
        <a href='/'>查看更多</a>
      </div>
      <ul className='wrap'>
        {favoriteGameList.map((item) => {
          return (
            <li key={item.id}>
              <a href='/'>
                <img src={item.imgUrl} alt={item.title} />
              </a>
            </li>
          )
        })}
      </ul>
    </FavoriteGameComp>
  )
}

export default FavoriteGame
