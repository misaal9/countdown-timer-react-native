import { LOAD, SET_DATA_INIT } from './../constants/types'

const INITIAL_STATE = {
  isLoaded: false
}

const AppReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DATA_INIT:
    case LOAD:
      return {
        ...state,
        ...action.payload
      }
      break
    default:
      return state
  }
}

export default AppReducer