import * as React from 'react';
import { renderToString } from 'react-dom/server';
import * as serialize from 'serialize-javascript';
import * as jsStringEscape from 'js-string-escape';

// server side render
export const ssr = (placeholder, App) => {
  const render = (store, res) => {
    const currentState = store.getState();
    const html = renderToString(<App state={currentState} />);
    const preloadedState = jsStringEscape(serialize(currentState, { isJSON: true }));
    const configData = {
      ...currentState.config,
      content: {
        html,
        preloadedState
      }
    };
    return placeholder(configData);
  };
  return {
    render
  };
};

export default ssr;
