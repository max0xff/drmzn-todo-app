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
    .set('config', {
      build: {
        version: '0.0.8'
      },
      meta: {
        robots: 'index, follow',
        og: {
          title: 'title default',
          description: 'desc default',
          image: '',
          site_name: 'asdasdasd'
        },
        canonical: ''
      }
    })
    .set('Main.todo.data', action.data)
    .set('Main.todo.options', action.options)
    .value();
}
