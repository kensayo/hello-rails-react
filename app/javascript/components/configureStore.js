import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reduceMessages from './messages';

const reducer = combineReducers({
  reduceMessages,
});
const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
export default store;
