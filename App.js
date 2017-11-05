import React from 'react';
import logger from 'redux-logger'
import * as firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import RootReducer from './src/common/reducers/RootReducer'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import AppContainer from './src/common/containers/AppContainer'

console.disableYellowBox = true

const store = createStore(
  RootReducer,
  applyMiddleware(ReduxThunk, logger)
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
