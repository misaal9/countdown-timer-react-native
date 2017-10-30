import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import List from './src/common/components/List'
import Start from './src/common/components/Start'
import TimeScreen from './src/common/components/Settings/TimeScreen'
import TitleScreen from './src/common/components/Settings/TitleScreen'
import NotifScreen from './src/common/components/Settings/NotifScreen'

export default class App extends React.Component {
  render() {
    return (
      <List />
    );
  }
}
