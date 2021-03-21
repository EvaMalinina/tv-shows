import { all, call } from 'redux-saga/effects'
import watchFetchMovies from "../components/films/components/filmsList/store/sagas";

export default function* rootSaga() {
  yield all([
    call(watchFetchMovies),
  ])
}