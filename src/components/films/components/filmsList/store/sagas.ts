import {call, put, takeLatest, delay} from 'redux-saga/effects';
import {GET_MOVIES_START} from './types';
import {baseUrl} from "../../../../../url";
import {getMoviesDataFailure, getMoviesDataSuccess} from "./actions";


function* fetchMovies() {
  try {
    yield delay(1000);
    const res = yield call(fetch, baseUrl);
    const data = yield res.json();
    yield put(getMoviesDataSuccess(data));

  } catch (e) {
    yield put(getMoviesDataFailure(e.message));
  }
}


function* watchFetchMovies() {
  yield takeLatest(GET_MOVIES_START, fetchMovies);
}


export default watchFetchMovies;