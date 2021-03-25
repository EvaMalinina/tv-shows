import {IAction, IMovie} from "../../../store/interfaces";
import {
  GET_MOVIE_DATA_SUCCESS,
  SEND_NEW_MOVIE_DATA_ERROR,
  SEND_NEW_MOVIE_DATA_START,
  SEND_NEW_MOVIE_DATA_SUCCESS
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
    case SEND_NEW_MOVIE_DATA_START:
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

    default:
      return state;
  }
}
