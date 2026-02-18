import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';

if (typeof process === 'undefined') {
  window.process = { env: { NODE_ENV: 'development' } ***REMOVED***
}   
const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(<App />);