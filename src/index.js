import React from 'react';
import ReactDOM from 'react-dom/client';
import './common.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import rootReducers from "./components/redux/reducers"
const mystore =createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={mystore}>
    <App />
  </Provider>
  </BrowserRouter>
);
