import React from 'react'
import PropTypes from 'prop-types'
import Loading from './Loading'
import List from './List'

export const AppView = ({ loadAppData, appState }) => {

  if (!appState.isLoaded) {
    loadAppData()
    return <Loading />
  }

  return (
    <List items={appState.data.timers} />
  )
}

AppView.PropTypes = {
  loadAppData: PropTypes.func,
  sppState: PropTypes.object
}