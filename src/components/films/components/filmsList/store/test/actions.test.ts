import { GET_MOVIES_START, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from '../types';
import {getMoviesDataFailure, getMoviesDataStart, getMoviesDataSuccess} from '../actions';


describe('GET movies actions', () => {
  test('getMoviesDataStart action', () => {
    const expectedAction = {
      type: GET_MOVIES_START,
    };
    expect(getMoviesDataStart()).toEqual(expectedAction);
  });

  test('getMoviesDataFailure action', () => {
    const err = Error;
    const expectedAction = {
      type: GET_MOVIES_ERROR,
      payload: err
    };
    expect(getMoviesDataFailure(err)).toEqual(expectedAction);
  });

  test('getMoviesDataSuccess action', () => {
    const receivedData = [{}];
    const expectedAction = {
      type: GET_MOVIES_SUCCESS,
      payload: receivedData
    };
    expect(getMoviesDataSuccess(receivedData)).toEqual(expectedAction);
  });

});
