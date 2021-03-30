import { SET_FILTER_MOVIES, SET_SORT_MOVIES } from './types';


export const filterMovies = (filter: string) => ({
  type: SET_FILTER_MOVIES,
  payload: filter
});

export const sortMovies = (sortBy: string) => ({
  type: SET_SORT_MOVIES,
  payload: sortBy
})