import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST, GET_LIST_PRODUCT_ID } from './constant';

function* getProducts() {
    let data = yield fetch('http://localhost:3500/product');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_PRODUCT_LIST, data})
}

// function* getProductsId() {
//     let dataId = yield fetch(`http://localhost:3500/product?q=${matchId.params.pid}`);
//     dataId = yield dataId.json();
//     console.warn("action is called dataId", matchId)
//     yield put({type: SET_PRODUCT_LIST, matchId:dataId})
// } 

function* searchProducts(data) {
    let result = yield fetch(`http://localhost:3500/product?q=${data.query}`);
    result = yield result.json();
    console.warn("action is called", result)
    yield put({type: SET_PRODUCT_LIST, data:result})
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
    // yield takeEvery(GET_LIST_PRODUCT_ID, getProductsId)

}

export default productSaga;