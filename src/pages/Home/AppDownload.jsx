import React, { useState } from 'react'
import styled from 'styled-components'
//assets
import close from '@assets/images/common/common/close.png'

const AppDlComp = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 35px 10px 15px;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  & button {
    background: none;
    border: none;
  }
  & .close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 16px;
    height: 16px;
    background: url(${close}) center center no-repeat;
    background-size: 100% auto;
  }
  & .download {
    width: 80px;
    height: 32px;
    background: ${({ theme }) => theme.color.primary};
    border-radius: 5px;
    color: #fff;
    line-height: 32px;
  }
  & dl {
    position: relative;
    padding-left: 50px;
    color: ${({ theme }) => theme.color.white};
    line-height: 20px;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      width: 40px;
      height: 40px;
      background: url(${({ theme }) => theme.icons.appDownload});
      background-size: 100% auto;
    }
    & dt {
      font-size: 15px;
    }
    & dd {
      font-size: 12px;
    }
  }
`

const AppDownload = () => {
  const [enabled, setEnabled] = useState(true)
  
  //關閉元件
  const handleClose = () => {
    setEnabled(false)
  }

  if (enabled) {
    return (
      <AppDlComp>
        <dl>
          <dt>OG東方</dt>
          <dd>精选游戏等你来玩</dd>
        </dl>
        <button className='download'>立即下载</button>
        <button className='close' onClick={handleClose} />
      </AppDlComp>
    )
  } else {
    return null
  }
  
}

export default AppDownload
