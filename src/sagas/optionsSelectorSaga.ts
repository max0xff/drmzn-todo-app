import { takeLatest, cancel } from 'redux-saga/effects';
import * as actions from 'src/actions';
import { store } from 'src/utils/store';

import { computeOptions } from 'src/functions';

function * computeOptionsAction(action) {
  if (action.type === 'OPTIONS') {
    yield cancel();
  }
  const state = yield (<any>store.getState());
  if (state && state.Main && state.Main.todo && state.Main.todo.data) {
    const options = yield computeOptions(store, state.Main.todo.data);
    yield actions.options.dispatch(store, options);
  }
}

// watch for TODO_* actions and compute options
function * optionsSelectorSaga() {
  yield takeLatest(action => /^TODO_/.test(action.type), computeOptionsAction);
}

export default optionsSelectorSaga;
