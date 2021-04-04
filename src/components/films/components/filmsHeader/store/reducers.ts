import {SET_FILTER_MOVIES, SET_SORT_MOVIES} from './types';
import {IAction} from "../../../../../store/interfaces";

const initialState = {
  filter: '',
  sortBy: ''
};

export default function(state = initialState, action: IAction) {
  switch (action.type) {
    case SET_FILTER_MOVIES: {
      return {
        ...state,
        filter: action.payload
      };
    }

    case SET_SORT_MOVIES: {
      return {
        ...state,
        sortBy: action.payload
      };
    }

    default: return state
  }
}
