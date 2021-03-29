import { call, put, takeEvery } from 'redux-saga/effects';
import {SEND_NEW_MOVIE_DATA} from './types';
import {baseUrl} from "../../../url";
import {sendNewMovieDataFailure, sendNewMovieDataRequest, sendNewMovieDataSuccess} from "./actions";
import axios from "axios";


function* sendNewMovie(data:any) {
  try {
    yield put(sendNewMovieDataRequest());

    const movie = yield call(() => axios.post(`${baseUrl}movie`, {...data.payload}));

    yield put(sendNewMovieDataSuccess(movie.data));
  } catch (e) {
    yield put(sendNewMovieDataFailure(e.message));
  }
}


function* watchSendNewMovie() {
  yield takeEvery(SEND_NEW_MOVIE_DATA, sendNewMovie);
}


export default watchSendNewMovie;