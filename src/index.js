import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
// import {compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {rootReducer} from './redux/rootReducer';
import {forbiddenWordsMiddleware} from './redux/middleware'
import './styles/app.css';


const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(thunk, forbiddenWordsMiddleware) ));
// const store = createStore(rootReducer, compose(
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
// ));

const app = (
  <Provider store={store}> 
    <App />
  </Provider>
);

render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
