import * as actions from 'src/actions/index';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

function actionReducer(actions) {
  return (state = {}, action) => {
    const result = Object.keys(actions)
      .filter((item) => actions[item].type === action.type)
      .map((item) => actions[item].reduce(state, action));
    return result[0] || state;
  };
}

const hydrate = (() => {
  let preloadedState = {};
  if (typeof window !== 'undefined' && (<any>window).__PRELOADED_STATE__) {
    const preloadedStateEnc = (<any>window).__PRELOADED_STATE__;
    delete (<any>window).__PRELOADED_STATE__;
    preloadedState = JSON.parse(preloadedStateEnc);
  }
  return preloadedState;
})();

export const sagaMiddleware = createSagaMiddleware();

// export function that creates new store for server side
export const storeCreate = () => createStore(actionReducer(actions), hydrate, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// init the store on client side
export const store = storeCreate();
