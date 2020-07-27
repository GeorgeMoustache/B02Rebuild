import React, { useState, useEffect } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import RouterGuard from '@router'
import routerConfig from '@router/config'
//styles
import { theme } from '@/theme'
import { ThemeProvider } from 'styled-components'
//components
import Navigator from '@components/Navigator'
//api
import { fetchApi } from '@api'

const App = () => {
  const [themeType, setThemeType] = useState('origin')

  useEffect(()=>{
    fetchApi.config().then(res => {
      const { code } = res.data
      if (code !== 0) return
      const { clientCode } = res.data.data
      if (clientCode in theme) setThemeType(clientCode) 
    })
  },[])

  return (
    <ThemeProvider theme={theme[themeType]}>
      <Router>
        <RouterGuard config={routerConfig} />
        <Navigator />
      </Router>
    </ThemeProvider>
  )
}

export default App
