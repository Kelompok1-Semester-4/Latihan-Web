import React from 'react';
import ReactDOM from 'react-dom';
import Form from './views/component/Form';
import Index from './views/Index';
import './assets/styles/kodeku.css';

ReactDOM.render(
  <React.StrictMode>
    <Index />
    <Form />
  </React.StrictMode>,
  document.getElementById('root')
);