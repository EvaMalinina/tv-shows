import {call, put, takeLatest, delay} from 'redux-saga/effects';
import {GET_MOVIES_START, SEARCH_MOVIE} from './types';
import {baseUrl} from "../../../../../url";
import {
  getMoviesDataFailure,
  getMoviesDataSuccess, searchMovieFailure,
  searchMovieRequest, searchMovieSuccess
} from "./actions";
import axios from "axios";
import {IMovie} from "../../../../../store/interfaces";

interface res {
  data: IMovie
}

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


function* searchMovie(data:any) {
  try {
    yield put(searchMovieRequest());
    const res: res = yield call(() => axios.get(`${baseUrl}movie/${data.payload.trim()}`));

    yield put(searchMovieSuccess(res.data));
  } catch (e) {
    yield put(searchMovieFailure(e.message));
  }
}

export function* watchSearchMovie() {
  yield takeLatest(SEARCH_MOVIE, searchMovie);
}


export default watchFetchMovies;