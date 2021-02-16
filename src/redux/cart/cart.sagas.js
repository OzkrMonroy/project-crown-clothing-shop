import { all, call, put, takeLatest } from 'redux-saga/effects'
import UserActionTypes from '../user/user.actions';
import { clearCart } from './cart.actions';

export function* clearCartOnSignOut(){
  yield put(clearCart())
}

export function* onSignOutSuccess(){
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas(){
  yield all([call(onSignOutSuccess)])
}