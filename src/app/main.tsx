import React from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import App from './App';
import { ClientProvider } from './lib/client';

ReactDOM.render(
  <React.StrictMode>
    <ClientProvider>
      <App />
    </ClientProvider>
  </React.StrictMode>,
  document.querySelector('#root')
);
