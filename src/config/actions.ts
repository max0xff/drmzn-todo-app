import * as immutable from 'object-path-immutable/index';

export namespace page {
  export const type = 'PAGE';
  export const dispatch = (store, page) => {
    store.dispatch({
      type,
      page
    });
  };
  export const reduce = (state, action) => immutable(state)
    .set('Main.options.mainPage', {})
    .set(`Main.options.mainPage.${action.page}`, true)
    .value();
}

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

export namespace options {
  export const type = 'OPTIONS';
  export const dispatch = (store, options) => {
    store.dispatch({
      type,
      options
    });
  };
  export const reduce = (state, action) => immutable(state)
    .set('Main.todo.options', action.options)
    .value();
}

export namespace add {
  export const type = 'ADD';
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

export namespace edit {
  export const type = 'EDIT';
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

export namespace remove {
  export const type = 'REMOVE';
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

export namespace toggle {
  export const type = 'TOGGLE';
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

export namespace toggleAll {
  export const type = 'TOGGLE_ALL';
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

export namespace filterBy {
  export const type = 'FILTER_BY';
  export const dispatch = (store, data, filter) => {
    store.dispatch({
      type,
      data,
      filter
    });
  };
  export const reduce = (state, action) => immutable(state)
  .set('Main.todo.data', action.data)
  .set('Main.todo.options.filter', {})
  .set(`Main.todo.options.filter.${action.filter}`, true)
  .value();
}

export namespace removeCompleted {
  export const type = 'REMOVE_COMPLETED';
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

export namespace toggleEditing {
  export const type = 'TOGGLE_EDITING';
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

export namespace monitorSaga {
  export const type = 'monitorSaga';
  export const dispatch = (store, data) => {
    store.dispatch({
      type,
      data
    });
  };
  export const reduce = (state, action) => immutable(state)
    .set('Main.saga.test', action.data)
    .set('Main.saga.reducer', 'yoyo')
    .value();
}
