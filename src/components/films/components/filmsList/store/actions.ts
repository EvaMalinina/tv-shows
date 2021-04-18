import {
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE
} from './types';

export const getMoviesDataStart = () => ({ type: GET_MOVIES_START });

export const getMoviesDataFailure = (err: any) => ({
  type: GET_MOVIES_ERROR,
  payload: err,
});

export const getMoviesDataSuccess = (data: any) => ({
  type: GET_MOVIES_SUCCESS,
  payload: data,
});

export const searchMovie = (data: any) => ({
  type: SEARCH_MOVIE,
  payload: data,
});

export const searchMovieRequest = () => ({ type: SEARCH_MOVIE_REQUEST });

export const searchMovieFailure = (err: any) => ({
  type: SEARCH_MOVIE_ERROR,
  payload: err,
});

export const searchMovieSuccess = (data: any) => ({
  type: SEARCH_MOVIE_SUCCESS,
  payload: data,
});