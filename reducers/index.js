import user from './user';
import navigation from './navigation';
import { combineReducers } from 'redux';

module.exports = combineReducers({
  user,
  navigation,
});
