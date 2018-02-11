function warn(error) {
  if (__DEV__) {
    console.warn(error.message || error);
  }
  throw error;
}

export default store => next => action =>
  typeof action.then === 'function'
    ? Promise.resolve(action).then(next, warn)
    : next(action);
