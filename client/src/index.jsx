import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import React from 'react';
import ReactDOM from 'react-dom/client';

import {legacy_createStore as createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

import App from './App';

let userState;
if(window.localStorage.getItem("auth")){
  userState = JSON.parse(window.localStorage.getItem("auth"));
}else{
  userState = null;
}

const authReducer = (state = userState, action) =>{
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
  data : authReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      <App />
    </Provider>
);