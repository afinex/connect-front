import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import {legacy_createStore as createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

import App from './App';

const authReducer = (state={name :'fin'}, action) =>{
  switch(action.type){
    case "LOGGED_IN_USER":
      return {...state,...action.payload};
    case "LOGGED_OUT_USER":
      return action.payload;
    default :
      return state;
  }
}

const rootReducer = combineReducers({
  auth : authReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);