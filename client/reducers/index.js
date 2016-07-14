// index.js combines all reducers

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments './comments';

const rootReducer = combineReducers({posts, comments, router: routerReducer});

export default rootReducer;