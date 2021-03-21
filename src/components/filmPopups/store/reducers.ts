import { SET_MODAL_VISIBILITY } from './types';
import { IAction } from "../../../store/interfaces";


const initialState = {
  add: false,
  edit: false,
  remove: false,
  filmOverview: false
};

export default function(state = initialState, action: IAction) {
  switch (action.type) {
    case SET_MODAL_VISIBILITY: {
      const { payload: { modalType, visibility} } = action
      return {...state, [modalType]: visibility}
    }
    default: return state
  }
}
