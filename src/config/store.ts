import * as actions from 'src/config/actions';
import { createStore } from 'redux';

import { actionReducer, hydrate, extension } from 'drmzn-redux';

// export function that creates new store for server side
export const storeCreate = () => createStore(actionReducer(actions), hydrate, extension);

// init the store on client side
export const store = storeCreate();
