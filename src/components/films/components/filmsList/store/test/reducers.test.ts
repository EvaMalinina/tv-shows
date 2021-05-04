import reducer from '../reducers';
import {getMoviesDataFailure, getMoviesDataStart, getMoviesDataSuccess} from '../actions';

describe('GET movies reducer', () => {
  const initialState = {
    movies: [],
    isLoading: false,
    error: null
  };

  test('should start GET movies request', () => {
    const updatedState = reducer(initialState, getMoviesDataStart());
    expect(updatedState).toEqual({ ...initialState, isLoading: true });
  });

  test('should end GET movies request with error', () => {
    const err = Error;

    const updatedState = reducer(initialState, getMoviesDataFailure(err));
    expect(updatedState).toEqual({ ...initialState, isLoading: false, error: err });
  });

  test('should end GET movies request with success', () => {
    const data = [{}];

    const updatedState = reducer(initialState, getMoviesDataSuccess(data));
    expect(updatedState).toEqual({ ...initialState, isLoading: false, movies: data });
  });

});
