// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './cartReducer'; // अपने रेड्यूस रूट रेड्यूसर के साथ इम्पोर्ट करें
import rootSaga from './cartSaga'; // अपने सागा रूट सागा के साथ इम्पोर्ट करें

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
