import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import Counter from './Counter';
import MultipleState from './MultipleState';
import DisplayAPIwithClass from './DisplayAPIwithClass';
import reportWebVitals from './reportWebVitals';
import { APIDisplay } from './APIDisplay';
import Formfunction from './Formfunction';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Ecommers } from './Ecommers';






const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <React.StrictMode>
    <Ecommers/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
