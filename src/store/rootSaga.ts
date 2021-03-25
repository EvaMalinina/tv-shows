import { all, call } from 'redux-saga/effects'
import watchFetchMovies from "../components/films/components/filmsList/store/sagas";
import watchSendNewMovie from "../components/filmPopups/storeMovie/sagas";

export default function* rootSaga() {
  yield all([
    call(watchFetchMovies),
    call(watchSendNewMovie)
  ])
}