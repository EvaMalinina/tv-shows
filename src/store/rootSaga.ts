import { fork } from 'redux-saga/effects'
import watchFetchMovies, {watchSearchMovie} from "../components/films/components/filmsList/store/sagas";
import watchSendNewMovie, {watchDeleteMovie, watchUpdateMovie} from "../components/filmPopups/storeMovie/sagas";
import watchShowAlert from "../components/filmPopups/storeAlerts/sagas";

export default function* rootSaga() {
  yield fork(watchFetchMovies),
  yield fork(watchSendNewMovie),
  yield fork(watchDeleteMovie),
  yield fork(watchShowAlert),
  yield fork(watchUpdateMovie),
  yield fork(watchSearchMovie)
}