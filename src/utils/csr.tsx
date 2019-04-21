import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as debounce from 'lodash.debounce';

// client side render
export const csr = (store, App) => {
  const render = () => {
    console.time('render');
    ReactDOM.hydrate(<App state={store.getState()} />, document.getElementById('root'));
    console.timeEnd('render');
  };
  store.subscribe(debounce(render, 0, {
    leading: false,
    trailing: true
  }));
  return {
    render
  };
};

export default csr;
