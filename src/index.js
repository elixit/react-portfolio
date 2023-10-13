import React from 'react'; // Import React library
import ReactDOM from 'react-dom'; // Import ReactDOM library
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
import App from './App'; // Import the main App component

// Create a root element to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app wrapped in React.StrictMode
root.render(
  <React.StrictMode>
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}> 
      {/* Set up routing with a base URL */}
      <App /> {/* Render the main App component */}
    </BrowserRouter>
  </React.StrictMode>
);
