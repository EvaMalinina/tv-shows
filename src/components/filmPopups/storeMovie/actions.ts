import {
  DELETE_MOVIE_DATA,
  DELETE_MOVIE_DATA_ERROR,
  DELETE_MOVIE_DATA_REQUEST,
  DELETE_MOVIE_DATA_SUCCESS,
  GET_MOVIE_DATA_SUCCESS,
  SEND_NEW_MOVIE_DATA,
  SEND_NEW_MOVIE_DATA_ERROR,
  SEND_NEW_MOVIE_DATA_REQUEST,
  SEND_NEW_MOVIE_DATA_SUCCESS,
  UPDATE_MOVIE_DATA,
  UPDATE_MOVIE_DATA_ERROR,
  UPDATE_MOVIE_DATA_REQUEST, UPDATE_MOVIE_DATA_SUCCESS
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


export const deleteMovieData = (data: any) => ({
  type: DELETE_MOVIE_DATA,
  payload: data,
});

export const deleteMovieDataRequest = () => ({ type: DELETE_MOVIE_DATA_REQUEST });

export const deleteMovieDataFailure = (err: any) => ({
  type: DELETE_MOVIE_DATA_ERROR,
  payload: err,
});

export const deleteMovieDataSuccess = () => ({
  type: DELETE_MOVIE_DATA_SUCCESS,

});


export const updateMovieData = (data: any) => ({
  type: UPDATE_MOVIE_DATA,
  payload: data,
});

export const updateMovieDataRequest = () => ({ type: UPDATE_MOVIE_DATA_REQUEST });

export const updateMovieDataFailure = (err: any) => ({
  type: UPDATE_MOVIE_DATA_ERROR,
  payload: err,
});

export const updateMovieDataSuccess = (data: any) => ({
  type: UPDATE_MOVIE_DATA_SUCCESS,
  payload: data,
});