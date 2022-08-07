import * as immutable from 'object-path-immutable';

export namespace init {
  export const type = 'INIT';
  export const dispatch = (store, data, options) => {
    store.dispatch({
      type,
      data,
      options
    });
  };
  export const reduce = (state, action) => immutable.wrap(state)
    .set('config', {
      build: {
        version: '0.0.9'
      },
      meta: {
        robots: 'index, follow',
        og: {
          title: 'Drmzn Todo App Example',
          description: 'Simple demo of drmzn todo app',
          image: '',
          site_name: 'drmzn-todo-app'
        },
        canonical: 'https://drmzn-todo-app.herokuapp.com/'
      }
    })
    .set('Main.todo.data', action.data)
    .set('Main.todo.options', action.options)
    .value();
}
