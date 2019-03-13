import {createStore} from 'redux';
import { combineReducers } from 'redux';
import Actions from './Reducers/Actions';
import User from './Reducers/User';



const store = createStore(combineReducers({Actions,User}));

export default store;