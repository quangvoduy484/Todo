import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './Reducer/CombineReducers';
import logger from 'redux-logger'


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger),
    // other store enhancers if any
  ));
ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
