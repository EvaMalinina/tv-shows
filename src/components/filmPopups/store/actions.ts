import { SET_MODAL_VISIBILITY } from './types';

export const controlPopupVisibility = (modalType, visibility) => ({
  type: SET_MODAL_VISIBILITY,
  payload: {
    modalType,
    visibility
  }
});
