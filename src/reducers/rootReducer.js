import { combineReducers } from 'redux';
import TodoReducer from './todoReducer';

const RootReducer = combineReducers({
    todos: TodoReducer
});

export default RootReducer;
