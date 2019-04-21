import { all } from 'redux-saga/effects';
import { sagaMiddleware } from 'src/utils/store';

import someSaga from 'src/sagas/someSaga';
import optionsSelectorSaga from 'src/sagas/optionsSelectorSaga';

function * rootSaga() {
  yield all([
    optionsSelectorSaga(),
    someSaga()
  ]);
}

export function runSagas() {
  // console.log('runs sagas');
  sagaMiddleware.run(rootSaga);
}
