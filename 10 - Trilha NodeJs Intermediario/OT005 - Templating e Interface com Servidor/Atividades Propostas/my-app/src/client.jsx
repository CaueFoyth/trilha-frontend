import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';

const initialCount = window.__INITIAL_DATA__.count;

hydrateRoot(
  document.getElementById('root'),
  <App initialCount={initialCount} />
);
