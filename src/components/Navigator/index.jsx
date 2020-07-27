import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import * as routes from '@router/links'
import config from '@router/config'
import styled from 'styled-components'
//assets
import homeIcon from '@assets/images/common/navigator/home.png'
import gameCenterIcon from '@assets/images/common/navigator/gameCenter.png'
import eventIcon from '@assets/images/common/navigator/event.png'
import memberIcon from '@assets/images/common/navigator/member.png'

const NaviComp = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  padding: 5px 0;
  background: ${({theme}) => theme.color.white};
  box-shadow: 0 2px 2px 1px rgba(230, 231, 235, 0.4);
  z-index: 10;
  a, button {
    display: block;
    width: 20%;
    background: none;
    border: none;
    font-size: 12px;
    color: ${({theme}) => theme.color.black};
    text-align: center;
    &::before {
      content: '';
      display: block;
      width: 25px;
      height: 25px;
      margin: 0 auto 2px auto;
      background-position: center center;
      background-size: 100% auto;
    }
    &.home::before {
      background-image: url(${homeIcon});
    }
    &.game-center::before {
      background-image: url(${gameCenterIcon});
    }
    &.account::before {
      width: 42px;
      height: 42px;
      margin: -17px auto 4px auto;
      background-image: url(${({theme}) => theme.icons.naviActive.account});
    }
    &.event::before {
      background-image: url(${eventIcon});
    }
    &.member::before {
      background-image: url(${memberIcon});
    }
    /* active style */
    &.active {
      color: ${({theme}) => theme.color.primary};
      &.home::before {
        background-image: url(${({theme}) => theme.icons.naviActive.home});
      }
      &.game-center::before {
        background-image: url(${({theme}) => theme.icons.naviActive.gameCenter});
      }
      &.event::before {
        background-image: url(${({theme}) => theme.icons.naviActive.event});
      }
      &.member::before {
        background-image: url(${({theme}) => theme.icons.naviActive.member});
      }
    }
  }
`

const Navigator = () => {
  const location = useLocation();
  const [targetComponent, setTargetComponent] = useState()

  useEffect(()=> {
    const target = config.find(item => item.path === location.pathname)
    setTargetComponent(target)
  },[location])
  
  if (targetComponent && targetComponent.nav) {
    return (
      <NaviComp>
        <NavLink to={routes.HOME} exact activeClassName='active' className='home'>首页</NavLink>
        <NavLink to={routes.GAME_CENTER} exact activeClassName='active' className='game-center'>游戏中心</NavLink>
        <button className='account'>账户</button>
        <NavLink to={routes.EVENT} exact activeClassName='active' className='event'>活动</NavLink>
        <NavLink to={routes.MEMBER} exact activeClassName='active' className='member'>我的</NavLink>
      </NaviComp>
    )
  } else {
    return null
  }
  
}

export default Navigator