import { LOAD } from '../constants/types'

export const loadAction = () => {
  return({
    type: LOAD,
    payload: {
      isLoaded: true
    }
  })
}