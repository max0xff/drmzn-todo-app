import * as express from 'express';
import * as compression from 'compression';
import * as http from 'http';
// import * as https from 'https';
// import * as fs from 'fs';

import { storeCreate } from 'src/utils/store';
import { Todo } from 'src/controllers/TodoController';
import { placeholder } from 'src/config/placeholder';
import { runSagas } from 'src/sagas';

// react
import { ssr } from 'drmzn-react';
import App from 'src/components/root';

// mustache
// import { ssr, getTemplates } from 'drmzn-mustache';
// const tpls = require.context('src/mustache', true, /\.html$/);
// const { templates, container } = getTemplates(tpls);

const version = '0.0.8';

const app = express();
app.use(compression());

// React render
app.get('/', async (req, res) => {
  const store = storeCreate();
  runSagas();
  await Todo(store).init('/');
  ssr(placeholder, App, version).render(store, req, res);
});

// Mustache render
// app.get('/', async (req, res) => {
//   const store = storeCreate();
//   runSagas();
//   await Todo(store).init('/');
//   ssr(placeholder, container, templates, version).render(store, req, res);
// });

app.use('/', express.static('dist/public'));

const server = http.createServer(app);
server.listen(3000);

// const options = {
//   key: fs.readFileSync('localhost.key'),
//   cert: fs.readFileSync('localhost.crt')
// };

// const server = https.createServer(options, app);
// server.listen(443);
