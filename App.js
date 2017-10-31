import React from 'react';
import logger from 'redux-logger'
import RootReducer from './src/common/reducers/RootReducer'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import List from './src/common/components/List'
import Start from './src/common/components/Start'
import TimeScreen from './src/common/components/Settings/TimeScreen'
import TitleScreen from './src/common/components/Settings/TitleScreen'
import NotifScreen from './src/common/components/Settings/NotifScreen'

import LoadAppContainer from './src/common/containers/LoadAppContainer'

const store = createStore(
  RootReducer,
  applyMiddleware(logger)
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LoadAppContainer />
      </Provider>
    );
  }
}
