import { createStore } from 'redux';
import RootReducer from '../reducers/rootReducer';

const TodoStore = createStore(RootReducer);

export default TodoStore;