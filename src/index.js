import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./App.css"
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom"
import Context from "./Context/Context"

ReactDOM.render(
    <BrowserRouter>
    <Context>  
    <App />
      </Context>
    </BrowserRouter>
  ,document.getElementById('root')
);

