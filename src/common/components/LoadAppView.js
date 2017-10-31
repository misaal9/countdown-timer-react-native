import React from 'react'
import PropTypes from 'prop-types'
import List from './List'

export const LoadAppView = ({ load, state }) => {
  if (!state) {
    load()
  }

  return(
    <List />
  )
}

LoadAppView.PropTypes = {
  load: PropTypes.func,
  state: PropTypes.object
}