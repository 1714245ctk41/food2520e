import { all, call, takeLatest, put } from "redux-saga/effects";
import UserActionTypes from "../user/userTypes";
import { clearCart } from "./CartActions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignoutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignoutSuccess)]);
}
