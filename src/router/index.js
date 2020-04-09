import Vue from 'vue'
import Router from 'vue-router'
import LoadLogin from '@/pages/login/landLogin'
import LoginPage from '@/pages/signIn/loginPage'
import RegisterPage from '@/pages/register/registerPage'
import Purpose from '@/pages/sketch/purpose'
import WhatThis from '@/pages/sketch/whatThis'
import CreditValue from '@/pages/sketch/creditValue'
import NeedingAttention from '@/pages/sketch/needingAttention'
import ChargingStandard from '@/pages/sketch/chargingStandard'
import PosterPages from '@/pages/poster/posterPages'
import NameCardPages from '@/pages/nameCard/nameCardPages'
import PeoplePages from '@/pages/peoplePages/peopleZhongxin'
import CarddisplayPages from '@/pages/cardDisplay/carddisplayPages'

Vue.use(Router)

export default new Router({
  routes: [
    // 默认主页面
    {
      path: '/',
      redirect: 'loadLogin'
    },
    {
      path: '/loadLogin',
      name: 'LoadLogin',
      component: LoadLogin
    },
    {
      path: '/loginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/registerPage',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/purpose',
      name: 'Purpose',
      component: Purpose
    },
    {
      path: '/whatThis',
      name: 'WhatThis',
      component: WhatThis
    },
    {
      path: '/creditValue',
      name: 'CreditValue',
      component: CreditValue
    },
    {
      path: '/needingAttention',
      name: 'NeedingAttention',
      component: NeedingAttention
    },
    {
      path: '/chargingStandard',
      name: 'ChargingStandard',
      component: ChargingStandard
    },
    {
      path: '/posterPages',
      name: 'PosterPages',
      component: PosterPages
    },
    {
      path: '/nameCardPages',
      name: 'NameCardPages',
      component: NameCardPages
    },
    // {
    //   path: '/integrityPage',
    //   name: 'IntegrityPage',
    //   component: IntegrityPage
    // },
    {
      path: '/peopleZhongxin',
      name: 'PeoplePages',
      component: PeoplePages
    },
    {
      path: '/carddisplayPages',
      name: 'CarddisplayPages',
      component: CarddisplayPages
    }
  ]
})
