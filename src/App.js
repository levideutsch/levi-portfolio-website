import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import TestPage from './TestPage';
import SecondTestPage from './SecondTestPage';
import Home from './Home';
import SingleProject from './SingleProject';

import useScrollToTop from './UseScrollToTop';

function App() {
 

  useScrollToTop()

  return (
    <div style={{ textAlign: "center" }}>
      {/* <FloatingNav /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:projectId' element={<SingleProject />} />
        <Route path='/test-page' element={<TestPage />} />
        <Route path='/second-test-page' element={<SecondTestPage />} />
      </Routes>
    </div>
  );
}

export default App;
