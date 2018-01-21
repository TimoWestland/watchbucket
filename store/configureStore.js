import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

const isDebuggingInChrome = true;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: false,
  duration: true
});

// const createWBStore = createStore(
//   reducers,
//   {},
//   applyMiddleware(thunk, logger)
// );

function configureStore() {
  const store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
  );

  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
}

module.exports = configureStore;
