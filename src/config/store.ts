import * as actions from 'src/config/actions';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { actionReducer, hydrate } from 'drmzn-redux';

export const sagaMiddleware = createSagaMiddleware();

// export function that creates new store for server side
export const storeCreate = () => createStore(actionReducer(actions), hydrate, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// init the store on client side
export const store = storeCreate();
