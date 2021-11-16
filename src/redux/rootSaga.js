import { all, call } from "redux-saga/effects";
import { shopSagas } from "./shop/shopSaga";
import { userSagas } from "../redux/user/userSaga";
import { cartSagas } from "../redux/cart/cartSagas";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
