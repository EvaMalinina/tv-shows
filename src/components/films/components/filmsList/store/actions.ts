import { GET_MOVIES_START, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from './types';

export const getMoviesDataStart = () => ({ type: GET_MOVIES_START });

export const getMoviesDataFailure = (err: any) => ({
  type: GET_MOVIES_ERROR,
  payload: err,
});

export const getMoviesDataSuccess = (data: any) => ({
  type: GET_MOVIES_SUCCESS,
  payload: data,
});
