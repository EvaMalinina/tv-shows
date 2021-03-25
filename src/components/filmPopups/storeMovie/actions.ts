import { GET_MOVIE_DATA_SUCCESS, SEND_NEW_MOVIE_DATA_START} from './types';


export const sendNewMovieData = () => ({ type: SEND_NEW_MOVIE_DATA_START });

export const getSingleMovieData = (data) => ({
  type: GET_MOVIE_DATA_SUCCESS,
  payload: data
});