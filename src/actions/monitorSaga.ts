import * as immutable from 'object-path-immutable';

export namespace monitorSaga {
  export const type = 'monitorSaga';
  export const dispatch = (store, data) => {
    store.dispatch({
      type,
      data
    });
  };
  export const reduce = (state, action) => immutable.wrap(state)
    .set('Main.saga.test', action.data)
    .set('Main.saga.reducer', 'yoyo')
    .value();
}
