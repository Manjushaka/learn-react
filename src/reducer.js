import { combineReducers } from 'redux';
import countAddMinusReducer from './countAddMinusReducer';
import nameAgeReducer from './nameAgeReducer';

export default combineReducers({
    countAddMinus: countAddMinusReducer,
    nameAge: nameAgeReducer,
});
