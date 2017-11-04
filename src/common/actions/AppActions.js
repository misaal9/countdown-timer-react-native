import { LOAD, SET_DATA_INIT } from '../constants/types'
import Database from '../services/Database'

const setInitDataFromFirebase = data => {
  return ({
    type: SET_DATA_INIT,
    payload: {
      data,
      isLoaded: true
    }
  })
}

export const loadAction = () => {
  return ((dispatch)=>{
    Database.once('value', snapshot=>{
      dispatch(setInitDataFromFirebase(snapshot.val()))
    })
  })
}