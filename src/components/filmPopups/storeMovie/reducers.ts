import {IAction, IMovie} from "../../../store/interfaces";
import {
  GET_MOVIE_DATA_SUCCESS,
  SEND_NEW_MOVIE_DATA_ERROR,
  SEND_NEW_MOVIE_DATA_SUCCESS,
  SEND_NEW_MOVIE_DATA_REQUEST,
  DELETE_MOVIE_DATA_REQUEST,
  DELETE_MOVIE_DATA_SUCCESS,
  DELETE_MOVIE_DATA_ERROR,
  UPDATE_MOVIE_DATA_REQUEST, UPDATE_MOVIE_DATA_SUCCESS, UPDATE_MOVIE_DATA_ERROR
} from "./types";

const initialState = {
  movie: {
    name: '',
    desc: '',
    category: '',
    year: '',
    img: ''
  },
  isLoading: false,
  error: null
};

export default function(state = initialState, action: IAction) {
  switch (action.type) {
    case SEND_NEW_MOVIE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case SEND_NEW_MOVIE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movie: action.payload
      };

    case SEND_NEW_MOVIE_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case GET_MOVIE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movie: {
          movieId: action.payload.movieId,
          name: action.payload.name,
          desc: action.payload.desc,
          category: action.payload.category,
          year: action.payload.year,
          img: action.payload.img,
          runtime: action.payload.runtime
        }
      };

    case DELETE_MOVIE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case DELETE_MOVIE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false
      };

    case DELETE_MOVIE_DATA_ERROR:
      return {
        ...state,
        isLoading: false
      };

    case UPDATE_MOVIE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case UPDATE_MOVIE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movie: action.payload
      };

    case UPDATE_MOVIE_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
