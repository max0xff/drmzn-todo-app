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
