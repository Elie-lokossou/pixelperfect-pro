// Patch window.fetch to prevent Uncaught TypeError: Cannot set property fetch of #<Window> which has only a getter
(function() {
  try {
    let _fetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      get: () => _fetch,
      set: (v) => { _fetch = v; },
      configurable: true,
      enumerable: true,
    });
  } catch (e) {
    // Ignore if property is already redefined
  }
})();

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
