import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GeneratorLayout from './layouts/GeneratorLayout';
import TempLayout from './layouts/TempLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={GeneratorLayout} />
        <Route path='/:generatedURL' Component={TempLayout} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
