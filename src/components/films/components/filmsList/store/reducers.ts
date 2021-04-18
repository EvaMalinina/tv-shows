import {
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_ERROR
} from './types';
import { IAction } from "../../../../../store/interfaces";

const initialState = {
  movies: [],
  isLoading: false,
  error: null
};

export default function(state = initialState, action: IAction) {
  switch (action.type) {
    case GET_MOVIES_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload
      };

    case GET_MOVIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case SEARCH_MOVIE_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload
      };

    case SEARCH_MOVIE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
