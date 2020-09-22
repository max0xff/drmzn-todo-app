import * as immutable from 'object-path-immutable';

export namespace toggleEditing {
  export const type = 'TODO_TOGGLE_EDITING';
  export const dispatch = (store, data) => {
    store.dispatch({
      type,
      data
    });
  };
  export const reduce = (state, action) => immutable.wrap(state)
    .set('Main.todo.data', action.data)
    .value();
}
