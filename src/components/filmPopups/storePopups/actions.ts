import { SET_MODAL_VISIBILITY } from './types';


export const controlPopupVisibility = (modalType: string, visibility: boolean) => ({
  type: SET_MODAL_VISIBILITY,
  payload: {
    modalType,
    visibility
  }
});
