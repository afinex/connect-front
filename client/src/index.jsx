import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { legacy_createStore as createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistReducer, persistStore, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import CryptoJS from 'crypto-js';

import App from './App';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGGED_IN_USER':
      return { ...state, ...action.payload.auth.user };
    case 'LOGGED_OUT_USER':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: authReducer,
});

const encrypt = (data, key) => CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
const decrypt = (data, key) => {
  const decryptedBytes = CryptoJS.AES.decrypt(data, key);
  return JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
};

const encryptTransform = createTransform(
  (inboundState, key) => {
    return encrypt(inboundState, import.meta.env.VITE_APP_REDUX_PERSIST_SECRET);
  },
  (outboundState, key) => {
    return decrypt(outboundState, import.meta.env.VITE_APP_REDUX_PERSIST_SECRET);
  },
  { whitelist: ['data'] }
);

const persistConfig = {
  key: 'root',
  storage,
  transforms: [encryptTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
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
    </PersistGate>
  </Provider>
);
