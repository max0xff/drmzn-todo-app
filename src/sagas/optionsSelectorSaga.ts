import { takeLatest, delay, call, cancel } from 'redux-saga/effects';
import * as actions from 'src/config/actions';
import { store } from 'src/config/store';

import { computeOptions } from 'src/config/functions';

function * computeOptionsAction(action) {
  if (yield action.type === 'OPTIONS') yield cancel();
  const options = yield computeOptions(store, (<any>store.getState()).Main.todo.data);
  yield call(actions.options.dispatch, store, options);
}

function * optionsSelectorSaga() {
  yield takeLatest('*', computeOptionsAction);
}

export default optionsSelectorSaga;
