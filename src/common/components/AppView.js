import React from 'react'
import PropTypes from 'prop-types'
import Loading from './Loading'
import List from './List'

import RootNavigator from '../routes/RootNavigator'

export const AppView = ({ loadAppData, appState }) => {

  if (!appState.isLoaded) {
    loadAppData()
    return <Loading />
  }

  return (
    <RootNavigator screenProps={appState} />
  )
}

AppView.PropTypes = {
  loadAppData: PropTypes.func,
  sppState: PropTypes.object
}