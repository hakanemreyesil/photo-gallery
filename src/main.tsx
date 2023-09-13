import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader after the platform has been bootstrapped

const container = document.getElementById('root');
const root = createRoot(container!);
defineCustomElements(window);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);