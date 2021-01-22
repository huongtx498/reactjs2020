import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import TodoStore from './store/store';

ReactDOM.render(<><Provider store={TodoStore}><App /></Provider></>, document.getElementById('root'));
