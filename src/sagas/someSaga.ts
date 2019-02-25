import { takeLatest, delay } from 'redux-saga/effects';
import * as actions from 'src/config/actions';
import { store } from 'src/config/store';

function * someAction() {
  yield delay(2000);
  yield console.log('yoyo');
  yield actions.monitorSaga.dispatch(store, 'testing action-reducer');
}

function * someSaga() {
  yield takeLatest('add', someAction);
}

export default someSaga;
