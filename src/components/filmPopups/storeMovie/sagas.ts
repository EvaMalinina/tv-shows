import { call, put, takeEvery } from 'redux-saga/effects';
import {DELETE_MOVIE_DATA, SEND_NEW_MOVIE_DATA, UPDATE_MOVIE_DATA} from './types';
import {baseUrl} from "../../../url";
import {
  deleteMovieDataFailure,
  deleteMovieDataRequest, deleteMovieDataSuccess,
  sendNewMovieDataFailure,
  sendNewMovieDataRequest,
  sendNewMovieDataSuccess, updateMovieDataFailure, updateMovieDataRequest, updateMovieDataSuccess
} from "./actions";
import axios from "axios";
import { showAlert } from '../storeAlerts/actions';
import {IMovie} from "../../../store/interfaces";

interface res {
  data: IMovie
}

function* sendNewMovie(data:any) {
  try {
    yield put(sendNewMovieDataRequest());
    const res: res = yield call(() => axios.post(`${baseUrl}movie`, {...data.payload}));
    yield put(sendNewMovieDataSuccess(res.data));

    yield put(showAlert({text: `${res.data.name} successfully added!`, type: 'success'}))

  } catch (e) {
    yield put(sendNewMovieDataFailure(e.response.data));
    yield put(showAlert({text: e.response.data, type: 'error'}))
  }
}


function* watchSendNewMovie() {
  yield takeEvery(SEND_NEW_MOVIE_DATA, sendNewMovie);
}


export default watchSendNewMovie;

function* deleteMovie(data:any) {
  try {
    yield put(deleteMovieDataRequest());

    const movieId = data.payload;
    yield call(() => axios.delete(`${baseUrl}movie/${movieId}`));

    yield put(deleteMovieDataSuccess());
  } catch (e) {
    yield put(deleteMovieDataFailure(e.message));
  }
}


export function* watchDeleteMovie() {
  yield takeEvery(DELETE_MOVIE_DATA, deleteMovie);
}

function* updateMovie(data:any) {
  try {
    const { movieId, ...updatedMovie } = data.payload;
    yield put(updateMovieDataRequest());
    const res: res = yield call(() => axios.patch(`${baseUrl}movie/${movieId}`, updatedMovie));

    yield put(updateMovieDataSuccess(res.data));
    yield put(showAlert({text: `Movie ${res.data.name} successfully updated!`, type: 'success'}))
  } catch (e) {
    yield put(updateMovieDataFailure(e.message));
    yield put(showAlert({text: e.response.data, type: 'error'}))
  }
}


export function* watchUpdateMovie() {
  yield takeEvery(UPDATE_MOVIE_DATA, updateMovie);
}
