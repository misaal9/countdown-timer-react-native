import { LOAD } from './../constants/types'

const INITIAL_STATE = {
  isLoaded: false,
  isDefaultSet: false
}

const AppReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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