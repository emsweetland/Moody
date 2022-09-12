import {put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'

function* responseSaga() {
    yield takeLatest('SET_RESPONSE', setResponse);
}

function* setResponse(action) {
    console.log('in setResponse')
}



  export default responseSaga;