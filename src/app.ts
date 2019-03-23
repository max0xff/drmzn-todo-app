import 'src/styles/default.scss';
import 'src/config/events';

import * as Pusher from 'pusher-js';

import { runSagas } from 'src/config/sagas';
import { store } from 'src/config/store';

// react
import { views } from 'drmzn-react';
import App from 'src/components/root';

// mustache
// import { views, getTemplates } from 'drmzn-mustache';
// const tpls = require.context('src/mustache', true, /\.html$/);
// const { templates, container } = getTemplates(tpls);

(() => {
  console.log('client document loaded...');

  // start saga engine
  runSagas();

  // react render
  views(store, App).render();

  // mustache render
  // views(store, container, templates).render();

  if ('serviceWorker' in navigator) {
    (<any>navigator).serviceWorker.register('/sw.0.0.3.min.js').then((registration) => {
      console.log('service worker registrated...');

      (<any>navigator).serviceWorker.addEventListener('message', (event) => {
        console.log(event);
      });

      const pusher = new Pusher('7b8d394535de786ba7cc', {
        cluster: 'eu',
        forceTLS: true
      });

      const channel = pusher.subscribe('drmzn');
      channel.bind('secret-message', (data) => {
        console.log(`%c${data.message}`, 'border-radius: 5px; background: #dc4421; color: #fff; padding: 10px 20px;');
      });

    }, (err) => {
      console.log('service worker registration failed: ', err);
    });
  } else {
    console.log('service worker not found');
  }

})();
