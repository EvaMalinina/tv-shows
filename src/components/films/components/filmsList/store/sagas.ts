import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { GET_MOVIES_ERROR, GET_MOVIES_START, GET_MOVIES_SUCCESS } from './types';
import { baseUrl } from "../../../../../url";


function* fetchMovies() {
  try {
    yield delay(1000);
    const res = yield call(fetch, baseUrl);
    const data = yield res.json();
    yield put({ type: GET_MOVIES_SUCCESS, payload: data });

  } catch (e) {
    yield put({type: GET_MOVIES_ERROR, payload: e.message});
  }
}


function* watchFetchMovies() {
  yield takeEvery(GET_MOVIES_START, fetchMovies);
}


export default watchFetchMovies;