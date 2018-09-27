import { combineReducers } from 'redux';
import phrazeReducer from './phrazeReducer';

export default combineReducers({ phraze: phrazeReducer });
