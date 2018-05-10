import { combineReducers } from 'redux';
import countAddMinusReducer from './countAddMinusReducer';
import nameAgeReducer from './nameAgeReducer';
import userReducer from './userReducer';
import addTodoReducer from './containers/addTodo/reducers';
import reddit from './containers/reddit/reducers';

export default combineReducers({
    countAddMinus: countAddMinusReducer,
    nameAge: nameAgeReducer,
    user: userReducer,
    addTodo: addTodoReducer,
    reddit,
});
