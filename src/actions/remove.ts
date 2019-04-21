import * as immutable from 'object-path-immutable/index';

export namespace remove {
  export const type = 'TODO_REMOVE';
  export const dispatch = (store, data) => {
    store.dispatch({
      type,
      data
    });
  };
  export const reduce = (state, action) => immutable(state)
    .set('Main.todo.data', action.data)
    .value();
}