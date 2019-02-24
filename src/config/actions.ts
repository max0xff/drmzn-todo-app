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
  export const type = 'init';
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

export namespace add {
  export const type = 'add';
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

export namespace edit {
  export const type = 'edit';
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

export namespace remove {
  export const type = 'remove';
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

export namespace toggle {
  export const type = 'toggle';
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

export namespace toggleAll {
  export const type = 'toggleAll';
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

export namespace filterBy {
  export const type = 'filterBy';
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

export namespace removeCompleted {
  export const type = 'removeCompleted';
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

export namespace toggleEditing {
  export const type = 'toggleEditing';
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
