import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Pay from './PaystackIntegration.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="pay" element={<Pay />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


