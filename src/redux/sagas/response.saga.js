import {put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'

function* responseSaga() {
    yield takeLatest('POST_RESPONSE', postResponse);
    yield takeLatest('EDIT_RESPONSE', editResponse);
    yield takeLatest('DELETE_RESPONSE', deleteResponse);
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

function* deleteResponse(action) {
  try{
    yield axios.delete(`/api/response/${action.payload}`)
    console.log('in delete response', action.payload)
    yield put({
      type: 'DELETE_RESPONSE_ON_SERVER',
      payload : action.payload
    })
  }catch (error) {
    console.log('error if delete response', error)
  }
}

  export default responseSaga;