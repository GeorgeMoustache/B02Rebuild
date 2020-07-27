import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, useHistory, useLocation, Redirect } from 'react-router-dom'
import * as routes from './links'
import { USER_LOGIN } from '@actions/actionType'

const Guard = (props) => {
  const { config } = props
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const memberInfo = JSON.parse(localStorage.getItem('memberInfo'))
  const [targetComponent, setTargetComponent] = useState({})

  const routeComponent = () => {
    if (targetComponent.pathname) return (<Redirect to={routes.NOT_FOUND} />)
    if (token) {
      return (
        <Route exact path={targetComponent.pathname} component={targetComponent.component} />
      )
    } else {
      if (targetComponent.auth) {
        return (
          <Redirect to={routes.HOME} />
        )
      } else {
        return (
          <Route exact path={targetComponent.pathname} component={targetComponent.component} />
        )
      }
    }
  }

  useEffect(()=>{
    const curRoute = config.find(item => item.path === location.pathname)
    //判斷導向頁面是否存在，不存在的頁面導向 Not Found Page
    curRoute ? setTargetComponent(curRoute) : history.push(routes.NOT_FOUND)
    //如果 localStorage 有 memberInfo 就取入 redux
    if (memberInfo) {
      dispatch({type: USER_LOGIN, payload: memberInfo})
    }
  }, [history, config, location, dispatch, memberInfo])

  return (
    <React.Fragment>
      {routeComponent()}
    </React.Fragment>
  )
}

export default Guard