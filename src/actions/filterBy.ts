import * as immutable from 'object-path-immutable';

export namespace filterBy {
  export const type = 'TODO_FILTER_BY';
  export const dispatch = (store, data, filter) => {
    store.dispatch({
      type,
      data,
      filter
    });
  };
  export const reduce = (state, action) => immutable.wrap(state)
  .set('Main.todo.data', action.data)
  .set('Main.todo.options.filter', {})
  .set(`Main.todo.options.filter.${action.filter}`, true)
  .value();
}
