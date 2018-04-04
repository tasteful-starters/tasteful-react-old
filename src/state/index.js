import { 
  applyMiddleware, 
  combineReducers, 
  createStore
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { counterActions, counterReducers, counterSagas } from './counter';
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
const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

  function* rootSaga() {
    yield all([
      ...counterSagas
    ])
  }
  sagaMiddleware.run(rootSaga);

  return store;
};

const store = configureStore();


export default store;