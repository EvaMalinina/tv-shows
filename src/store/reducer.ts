import { combineReducers } from "redux";
import moviesReducer from "../components/films/components/filmsList/store/reducers";
import popupsReducer from "../components/filmPopups/store/reducers";

export default combineReducers({moviesReducer, popupsReducer});
