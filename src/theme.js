//ogEast assets
//navigator
import homeActiveIcon from '@assets/images/ogEast/navigator/home_active.png'
import gameCenterActiveIcon from '@assets/images/ogEast/navigator/gameCenter_active.png'
import accountIcon from '@assets/images/ogEast/navigator/account_active.png'
import eventActiveIcon from '@assets/images/ogEast/navigator/event_active.png'
import memberActiveIcon from '@assets/images/ogEast/navigator/member_active.png'
//marquee
import marqueeIcon from '@assets/images//ogEast/marquee/marquee.png'
//appDownload
import appDlLogo from '@assets/images/ogEast/common/logo.png'

export const theme = {
  origin: {
    color: {
      white: '#FFF',
      grey: '#aaabab',
      black: '#000',
      primary: '#0076ff'
    },
    icons: {
      naviActive: {
        home: homeActiveIcon,
        gameCenter: gameCenterActiveIcon,
        account: accountIcon,
        event: eventActiveIcon,
        member: memberActiveIcon
      },
      marquee: marqueeIcon,
      appDownload: null
    }
  },
  ogEast: {
    color: {
      white: '#FFF',
      grey: '#aaabab',
      black: '#252420',
      primary: '#f38844'
    },
    icons: {
      naviActive: {
        home: homeActiveIcon,
        gameCenter: gameCenterActiveIcon,
        account: accountIcon,
        event: eventActiveIcon,
        member: memberActiveIcon
      },
      marquee: marqueeIcon,
      appDownload: appDlLogo
    }
  }
}