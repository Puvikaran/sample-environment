import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import App from './components/App';
import './css/style.css';

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('app'));