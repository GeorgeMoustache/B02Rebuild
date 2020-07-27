import React from 'react'
import styled from 'styled-components'

const PageEndComp = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 12px;
  color: #aaabab;
  &::before,
  &::after {
    content: '';
    flex-grow: 1;
    display: block;
    height: 1px;
    margin: 0 10px;
    background: #f1f1f1;
  }
`

const PageEnd = () => {
  return <PageEndComp>我是有底线的</PageEndComp>
}

export default PageEnd