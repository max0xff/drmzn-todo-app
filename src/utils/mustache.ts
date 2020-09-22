/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import morphdom from 'morphdom';
import * as debounce from 'lodash.debounce';
import * as serialize from 'serialize-javascript';
import * as jsStringEscape from 'js-string-escape';

export const views = (store, container, templates) => {
  const parser = new DOMParser();

  const render = () => {
    console.time('render');
    const currentState = store.getState();
    const html = container.render(currentState, templates);
    const prev = document.getElementById('root');
    const next = prev.cloneNode(false);
    const fragment = parser.parseFromString(html, 'text/html').body;
    Object.keys(fragment.childNodes).forEach(() => {
      next.appendChild(fragment.firstElementChild);
    });
    morphdom(prev, next, {
      onBeforeElUpdated: ((fromEl, toEl) => {
        if (fromEl.isEqualNode(toEl) || (fromEl.classList && fromEl.classList.contains('norend'))) {
          return false;
        }
      }),
    });
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

/**
 * Import templates
 * Returns templates and container
 * @return {any}
 */
export const getTemplates = ((views) => {
  const templates:any = {};
  /**
   * Get the filename from directory, remove .html.
   * @param {string} name - The hostname.
   * @return {string}
   */
  const getName = (name) => (name.split('/').pop()).slice(0, -5);
  // get all html views
  if (views.keys().length < 1) {
    throw Error('Templates are missing!');
  }
  // generate templates object
  views.keys().forEach((view) => {
    const name = getName(view);
    if (templates[name]) {
      throw new Error(`Duplicate name of template: ${view}`);
    }
    templates[name] = views(view);
  });
  if (templates.root === undefined) {
    throw new Error('Container is missing!');
  }
  // define app container
  const container = templates.root;
  // remove app container template from list of templates
  delete templates.root;

  return {
    templates,
    container,
  };
});

export const ssr = (placeholder, container, templates, version) => {
  const render = (store, req, res, error = false) => {
    const currentState = store.getState();
    const html = container.render(currentState, templates);
    const preloadedState = jsStringEscape(serialize(currentState, { isJSON: true }));
    res.header('Content-Type', 'text/html; charset=utf-8');
    if (error) {
      res.status(404).send(placeholder(html, preloadedState, version));
    } else {
      res.send(placeholder({
        build: currentState.config.build,
        meta: currentState.config.meta,
        content: {
          html,
          preloadedState,
        },
      }));
    }
  };
  return {
    render,
  };
};

export default views;
