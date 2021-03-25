import { call, put, takeEvery } from 'redux-saga/effects';
import {SEND_NEW_MOVIE_DATA_ERROR, SEND_NEW_MOVIE_DATA_START, SEND_NEW_MOVIE_DATA_SUCCESS} from './types';
import {baseUrl} from "../../../url";


function* sendNewMovie() {
  try {
    const res = yield call(fetch, baseUrl+'movie', {
      method: 'POST',
    })
    const data = yield res.json();
    console.log('data saga', data)
    yield put({ type: SEND_NEW_MOVIE_DATA_SUCCESS, payload: data });

  } catch (e) {
    yield put({type: SEND_NEW_MOVIE_DATA_ERROR, payload: e.message});
  }
}


function* watchSendNewMovie() {
  yield takeEvery(SEND_NEW_MOVIE_DATA_START, sendNewMovie);
}


export default watchSendNewMovie;