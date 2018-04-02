import { 
  applyMiddleware, 
  combineReducers, 
  createStore
} from 'redux';

import { counterActions, counterReducers } from './counter';

export const actions = {
  counterActions
}

export const reducers = combineReducers({
  counter: counterReducers,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, composeEnhancers());
  return store;
};

const store = configureStore();

export default store;