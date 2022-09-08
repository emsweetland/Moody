import {put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'

function* reflectionSaga() {
    yield takeLatest('FETCH_REFLECTION', fetchReflection);
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