import * as routes from './links'
import Home from '@pages/Home/'
import GameCenter from '@pages/GameCenter'
import Event from '@pages/Event'
import Member from '@pages/Member'
import NotFound from '@pages/404'

export default [
  {
    path: routes.HOME,
    component: Home,
    auth: false,
    nav: true
  },
  {
    path: routes.GAME_CENTER,
    component: GameCenter,
    auth: false,
    nav: true
  },
  {
    path: routes.EVENT,
    component: Event,
    auth: false,
    nav: true
  },{
    path: routes.MEMBER,
    component: Member,
    auth: false,
    nav: true
  },
  {
    path: routes.NOT_FOUND,
    component: NotFound,
    auth: false,
    nav: false
  },
]