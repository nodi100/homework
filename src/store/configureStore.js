import { createStore } from 'redux';

import historyReducer from '../reducers/history';

export default function configureStore(initialState) {
  const store = createStore(historyReducer, initialState);
  return store;
}
