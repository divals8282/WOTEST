import {createStore} from 'redux';
import { combineReducers } from 'redux';
import Actions from './Reducers/Actions';
import User from './Reducers/User';
import Json from './Reducers/Json';



const store = createStore(combineReducers({Actions,User,Json}));

export default store;