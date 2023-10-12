import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'mdbreact/dist/css/mdb.css';  // Adjust the import statement for MDB React UI Kit
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
