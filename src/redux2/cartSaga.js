// sagas.js
import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

function* addToCartSaga(action) {
  try {
    // Axios का उपयोग करके सर्वर से आइटम को प्राप्त करें
    const response = yield call(axios.get, `/http://localhost:3500/product/${action.payload.itemId}`);

    // आइटम को स्थानीय संग्रहण में जोड़ें
    const itemToAdd = response.data;
    yield put({ type: 'ADD_TO_CART', payload: itemToAdd });
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

function* removeFromCartSaga(action) {
  try {
    // आइटम को स्थानीय संग्रहण से हटाएं
    yield put({ type: 'REMOVE_FROM_CART', payload: action.payload.itemId });
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}

function* rootSaga() {
  yield takeEvery('ADD_TO_CART_REQUEST', addToCartSaga);
  yield takeEvery('REMOVE_FROM_CART_REQUEST', removeFromCartSaga);
}

export default rootSaga;
