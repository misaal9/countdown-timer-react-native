import React from 'react'
import { StackNavigator } from 'react-navigation'
import { View } from 'react-native'
import { Icon, Button } from 'native-base'

// screens
import List from '../components/List'
import Start from '../components/Start'
import SettingsScreen from './SettingsScreen'

export default StackNavigator(
  {
    List: {
      screen: List,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Saved Timers',
          headerRight: (
            <Button 
              transparent
              onPress={()=>{navigation.navigate('Settings')}}
              >
              <Icon name='ios-add' />
            </Button>
          )
        }
      }
    },
    Start: {
      screen: Start,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Start',
          headerRight: (
            <View style={styles.headerView}>
              <Button 
                transparent
                onPress={()=>{
                  const {params} = navigation.state
                  return navigation.navigate('Settings', params)
                }}
                >
                <Icon name='ios-build' />
              </Button>
              <Button 
                transparent
                onPress={()=>{navigation.navigate('List')}}
                >
                  <Icon name='ios-apps-outline' />
                </Button>
            </View>
          )
        }
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Settings',
          headerRight: (
            <View style={styles.headerView}>
              <Button 
                transparent
                onPress={()=>{navigation.navigate('Start', )}}
                >
                <Icon name='ios-alarm-outline' />
              </Button>
              <Button 
                  transparent
                  onPress={()=>{navigation.navigate('List')}}
                  >
                  <Icon name='ios-apps-outline' />
                </Button>
            </View>
          )
        }
      }
    }
  },
  {
    navigationOptions: {
      headerMode: 'float',
      headerBackTitle: null
    }
  }
)

const styles = {
  headerView: {
    flexDirection: 'row'
  }
}