import { combineReducers } from "redux";
import moviesReducer from "../components/films/components/filmsList/store/reducers";
import popupsReducer from "../components/filmPopups/store/reducers";
import singleMovieReducer from "../components/filmPopups/storeMovie/reducers";

export default combineReducers({moviesReducer, popupsReducer, singleMovieReducer});
