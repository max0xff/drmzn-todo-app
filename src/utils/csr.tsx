import * as React from 'react';
import * as debounce from 'lodash.debounce';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// client side render
export const csr = (store, App) => {
  const render = () => {
    console.time('render');
    root.render(<React.StrictMode><Provider store={store}><App /></Provider></React.StrictMode>);
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
