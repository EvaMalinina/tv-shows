import { put, takeEvery, delay } from 'redux-saga/effects';
import {SHOW_ALERT} from "./types";
import {hideAlertSuccess, showAlertSuccess} from "./actions";


export function* showAlert(data:any) {
  yield put(showAlertSuccess({text: data.payload.text, type: data.payload.type}))
  yield delay(3e3)
  yield put(hideAlertSuccess())
}


function* watchShowAlert() {
  yield takeEvery(SHOW_ALERT, showAlert);
}

export default watchShowAlert;