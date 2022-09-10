import {put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'

function* reflectionSaga() {
    yield takeLatest('FETCH_REFLECTION', fetchReflection);
    yield takeLatest('FETCH_THIS_REFLECTION', fetchThisReflection)
}

function* fetchThisReflection(action) {
  // console.log(action)
   console.log('hii')
   console.log('action.payload', action.payload)
  try {
    const response = yield axios.get(`/api/reflection/${action.payload}`);
    yield console.log(response)
    yield put ({ type: 'SET_THIS_REFLECTION', payload: response.data})
  } catch (error) {
    console.log(error)
  }
}


function* fetchReflection() {
    //get all reflections from DB
    try {
      const reflection = yield axios.get('/api/reflection');
      console.log('get all:', reflection.data);
      yield put ({ type: 'SET_REFLECTION', payload: reflection.data});
    } catch {
        console.log('get all error');
    }
  };

  export default reflectionSaga;