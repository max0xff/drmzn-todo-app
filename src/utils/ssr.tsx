import * as React from 'react';
import { renderToString } from 'react-dom/server';
import * as serialize from 'serialize-javascript';
import * as jsStringEscape from 'js-string-escape';
import { Provider } from 'react-redux';

// server side render
export const ssr = (placeholder, App) => {
  const render = (store, res) => {
    const currentState = store.getState();
    const html = renderToString(<React.StrictMode><Provider store={store}><App /></Provider></React.StrictMode>);
    const preloadedState = jsStringEscape(serialize(currentState, { isJSON: true }));
    const configData = {
      ...currentState.config,
      content: {
        html,
        preloadedState,
      },
    };
    res.end(placeholder(configData));
  };
  return {
    render,
  };
};

export default ssr;
