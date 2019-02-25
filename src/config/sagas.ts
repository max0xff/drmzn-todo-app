import { all } from 'redux-saga/effects';
import { sagaMiddleware } from 'src/config/store';

import someSaga from 'src/sagas/someSaga';

function * rootSaga() {
  yield all([
    someSaga()
  ]);
}

export function runSagas() {
  console.log('runs sagas');
  sagaMiddleware.run(rootSaga);
}
