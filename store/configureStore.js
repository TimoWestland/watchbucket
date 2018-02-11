import thunk from 'redux-thunk';
import promise from './promise';
import array from './array';
import {reducers} from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

const logger = createLogger({
  predicate: (getState, action) => __DEV__,
  collapsed: false,
  duration: true
});

export const configureStore = () => {
  const store = createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(thunk, promise, array, logger),
    )
  );
  const persistor = persistStore(store);

  return { persistor, store };
};
