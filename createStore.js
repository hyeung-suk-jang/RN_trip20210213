import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import promiseMiddleware from 'redux-promise';
//reducer
import userReducer from './reducers/userReducer';

const logger = createLogger();

//전역 스토어.
export default (initialState = {}) => (
  createStore(
    combineReducers({
      user: userReducer
    }),
    initialState,
    applyMiddleware(logger, promiseMiddleware)
  )
);
