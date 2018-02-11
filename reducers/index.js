import { persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import user from './user';
import navigation from './navigation';

const config = {
  key: 'root',
  storage: AsyncStorage,
  debug: __DEV__
};

export const reducers = persistCombineReducers(config, {
  user,
  navigation,
});
