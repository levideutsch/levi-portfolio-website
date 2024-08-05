import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import TestPage from './TestPage';
import SecondTestPage from './SecondTestPage';
import Home from './Home';
import useScrollToTop from './UseScrollToTop';
import HandleProjects from './projects/HandleProjects';


function App() {



  useScrollToTop()


 

  return (
    <div  style={{ textAlign: 'center'}}>
      {/* <FloatingNav /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:id' element={<HandleProjects />} />
        <Route path='/test-page' element={<TestPage />} />
        <Route path='/second-test-page' element={<SecondTestPage />} />
      </Routes>
    </div>
  );
}

export default App;
