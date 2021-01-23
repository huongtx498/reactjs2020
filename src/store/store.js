import { createStore } from 'redux';
import RootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const TodoStore = createStore(RootReducer, composeWithDevTools());

export default TodoStore;