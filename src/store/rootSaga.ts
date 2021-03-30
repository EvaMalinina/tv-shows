import { all, call } from 'redux-saga/effects'
import watchFetchMovies from "../components/films/components/filmsList/store/sagas";
import watchSendNewMovie, {watchDeleteMovie, watchUpdateMovie} from "../components/filmPopups/storeMovie/sagas";
import watchShowAlert from "../components/filmPopups/storeAlerts/sagas";

export default function* rootSaga() {
  yield all([
    call(watchFetchMovies),
    call(watchSendNewMovie),
    call(watchDeleteMovie),
    call(watchShowAlert),
    call(watchUpdateMovie)
  ])
}