import {put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'

function* responseSaga() {
    yield takeLatest('POST_RESPONSE', postResponse);
    yield takeLatest('EDIT_RESPONSE', editResponse)
}

function* postResponse(action) {
  try{
    yield axios.post('/api/response', action.payload)
    console.log('in postResponse:',action.payload)
    yield put ({
      type : 'POST_RESPONSE_TO_SERVER',
      payload : action.payload
    })
  }catch (error) {
    console.log('error in postResponse', error)
  }}

function* editResponse(action) {
  try{
    yield axios.put('/api/response', action.payload)
    console.log('in edit response', action.payload)
    yield put({
      type: 'EDIT_RESPONSE_ON_SERVER',
      payload: action.payload
    })
  }catch (error) {
    console.log('error in edit responses', error)
  }
}


  export default responseSaga;