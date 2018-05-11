import { combineReducers } from 'redux';
import countAddMinusReducer from './countAddMinusReducer';
import nameAgeReducer from './nameAgeReducer';
import userReducer from './userReducer';
import addTodoReducer from './containers/addTodo/reducers';
import reddit from './containers/reddit/reducers';
import reddit1 from './containers/reddit1/reducer';

export default combineReducers({
    countAddMinus: countAddMinusReducer,
    nameAge: nameAgeReducer,
    user: userReducer,
    addTodo: addTodoReducer,
    reddit,
    reddit1,
});
