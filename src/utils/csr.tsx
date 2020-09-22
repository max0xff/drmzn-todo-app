/* eslint-disable no-undef */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as debounce from 'lodash.debounce';
import { Provider } from 'react-redux';

// client side render
export const csr = (store, App) => {
  const render = () => {
    console.time('render');
    ReactDOM.hydrate(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    console.timeEnd('render');
  };
  store.subscribe(debounce(render, 0, {
    leading: false,
    trailing: true,
  }));
  return {
    render,
  };
};

export default csr;
