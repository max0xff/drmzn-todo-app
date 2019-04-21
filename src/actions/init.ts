import * as immutable from 'object-path-immutable/index';

export namespace init {
  export const type = 'INIT';
  export const dispatch = (store, data, options) => {
    store.dispatch({
      type,
      data,
      options
    });
  };
  export const reduce = (state, action) => immutable(state)
    .set('Main.todo.data', action.data)
    .set('Main.todo.options', action.options)
    .value();
}
