import {IAction} from "../../../store/interfaces";
import {HIDE_ALERT_SUCCESS, SHOW_ALERT_SUCCESS} from "./types";

const initialState = {
  alertText: '',
  alertIsVisible: false,
  alertType: null
};

export default function(state = initialState, action: IAction) {
  switch (action.type) {
    case SHOW_ALERT_SUCCESS:
      return {
        ...state,
        alertIsVisible: true,
        alertText: action.payload.text,
        alertType: action.payload.type,
      };

    case HIDE_ALERT_SUCCESS:
      return {
        ...state,
        alertIsVisible: false
      };

    default:
      return state;
  }
}
