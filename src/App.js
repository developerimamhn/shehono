import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Lazy load the Component
const Component = lazy(() => import('./Component'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </BrowserRouter>
  );
}
