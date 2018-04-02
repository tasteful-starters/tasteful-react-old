import { 
  applyMiddleware, 
  combineReducers, 
  createStore
} from 'redux';

import { counterActions, counterReducers } from './counter';
import { todoListActions, todoListReducers } from './todo-list';

export const actions = {
  counterActions,
  todoListActions
}

export const reducers = combineReducers({
  counter: counterReducers,
  todoList: todoListReducers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, composeEnhancers());
  return store;
};

const store = configureStore();

export default store;