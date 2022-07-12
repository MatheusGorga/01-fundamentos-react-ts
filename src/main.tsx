import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ponto de exclamação para assegurar que existe o item
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
