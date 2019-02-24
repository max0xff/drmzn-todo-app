import * as express from 'express';
import * as compression from 'compression';
import * as http from 'http';

import { storeCreate } from 'src/config/store';
import { Todo } from 'src/controllers/TodoController';
import { placeholder } from 'src/config/placeholder';

import { ssr } from 'drmzn-react';
import App from 'src/components/root';

// import { ssr, getTemplates } from 'drmzn-mustache';
// const tpls = require.context('src/mustache', true, /\.html$/);
// const { templates, container } = getTemplates(tpls);

const version = '0.0.1';

const app = express();
app.use(compression());

app.get('/', async (req, res) => {
  const store = storeCreate();
  await Todo(store).init('/');
  ssr(placeholder, App, version).render(store, req, res);
  // ssr(placeholder, container, templates, version).render(store, req, res);
});

app.use('/', express.static('public'));

const server = http.createServer(app);
server.listen(2233);
