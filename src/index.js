import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Importamos de React-router-dom
import { BrowserRouter } from 'react-router-dom'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);