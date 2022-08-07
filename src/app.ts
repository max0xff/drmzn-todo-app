import 'src/styles/default.scss';
import 'src/events/events';

import { runSagas } from 'src/sagas';
import { store } from 'src/utils/store';

// react
import { csr } from 'src/utils/csr';
import App from 'src/components/root';

// mustache
// import { views, getTemplates } from 'src/utils/mustache';
// const tpls = require.context('src/mustache', true, /\.html$/);
// const { templates, container } = getTemplates(tpls);

(() => {
  console.log('client document loaded...');

  // start saga engine
  runSagas();

  // react render
  csr(store, App).render();

  // mustache render
  // views(store, container, templates).render();

  if ('serviceWorker' in navigator) {
    (<any>navigator).serviceWorker.register('/sw.0.0.9.min.js').then((registration) => {
      console.log('service worker registrated...');

      (<any>navigator).serviceWorker.addEventListener('message', (event) => {
        console.log(event);
      });
    }, (err) => {
      console.log('service worker registration failed: ', err);
    });
  } else {
    console.log('service worker not found');
  }
})();
