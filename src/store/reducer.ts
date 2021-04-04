import { combineReducers } from "redux";
import moviesReducer from "../components/films/components/filmsList/store/reducers";
import popupsReducer from "../components/filmPopups/storePopups/reducers";
import singleMovieReducer from "../components/filmPopups/storeMovie/reducers";
import alertsReducer from "../components/filmPopups/storeAlerts/reducers";
import filterReducer from "../components/films/components/filmsHeader/store/reducers";

export default combineReducers({
  moviesReducer,
  popupsReducer,
  singleMovieReducer,
  alertsReducer,
  filterReducer
});
