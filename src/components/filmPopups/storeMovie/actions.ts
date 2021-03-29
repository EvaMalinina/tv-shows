import {
  GET_MOVIE_DATA_SUCCESS,
  SEND_NEW_MOVIE_DATA,
  SEND_NEW_MOVIE_DATA_ERROR,
  SEND_NEW_MOVIE_DATA_REQUEST, SEND_NEW_MOVIE_DATA_SUCCESS
} from './types';

export const sendNewMovieData = (data: any) => ({
  type: SEND_NEW_MOVIE_DATA,
  payload: data,
});

export const sendNewMovieDataRequest = () => ({ type: SEND_NEW_MOVIE_DATA_REQUEST });

export const sendNewMovieDataFailure = (err: any) => ({
  type: SEND_NEW_MOVIE_DATA_ERROR,
  payload: err,
});

export const sendNewMovieDataSuccess = (data: any) => ({
  type: SEND_NEW_MOVIE_DATA_SUCCESS,
  payload: data,
});


export const getSingleMovieData = (data: any) => ({
  type: GET_MOVIE_DATA_SUCCESS,
  payload: data
});