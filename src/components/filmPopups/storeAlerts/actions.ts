import {
  SHOW_ALERT,
  HIDE_ALERT_SUCCESS,
  SHOW_ALERT_SUCCESS
} from "./types";

export const showAlert = (data: any) => ({
  type: SHOW_ALERT,
  payload: data,
});

export const showAlertSuccess = (data: any) => ({
  type: SHOW_ALERT_SUCCESS,
  payload: data
});

export const hideAlertSuccess = () => ({
  type: HIDE_ALERT_SUCCESS,
});


