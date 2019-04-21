import * as immutable from 'object-path-immutable/index';

export namespace toggle {
  export const type = 'TODO_TOGGLE';
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