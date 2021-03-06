import * as immutable from 'object-path-immutable';

export namespace options {
  export const type = 'OPTIONS';
  export const dispatch = (store, options) => {
    store.dispatch({
      type,
      options
    });
  };
  export const reduce = (state, action) => immutable.wrap(state)
    .set('Main.todo.options', action.options)
    .value();
}
