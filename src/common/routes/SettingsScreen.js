import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'

import Timer from '../components/settings/TimeScreen'
import Title from '../components/settings/TitleScreen'
import Notif from '../components/settings/NotifScreen'

export default TabNavigator(
  {
    Timer: {
      screen: Timer,
      navigationOptions: {
        title: 'Timer',
        tabBarIcon: () => <Icon name='ios-alarm'/>,
        swipeEnabled: true
      }
    },
    Title: {
      screen: Title,
      navigationOptions: {
        title: '',
        tabBarIcon: () => <Icon name='md-create'/>,
        swipeEnabled: true
      }
    },
    Notif: {
      screen: Notif,
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: () => <Icon name='ios-switch'/>,
        swipeEnabled: true
      }
    }
  }, {
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: false,
      activeBackgroundColor: '#ccc'
    }
  }
)