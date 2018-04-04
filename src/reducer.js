import { combineReducers } from 'redux';
import countAddMinusReducer from './countAddMinusReducer';
import nameAgeReducer from './nameAgeReducer';
import userReducer from './userReducer';

export default combineReducers({
    countAddMinus: countAddMinusReducer,
    nameAge: nameAgeReducer,
    user: userReducer,
});
