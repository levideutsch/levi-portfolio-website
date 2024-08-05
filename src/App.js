import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import TestPage from './TestPage';
import SecondTestPage from './SecondTestPage';
import Home from './Home';
import SmartInventoryProject from './projects/SmartInventoryProject';

import useScrollToTop from './UseScrollToTop';
import YentConnectProject from './projects/YentConnectProject';


function App() {



  useScrollToTop()


 

  return (
    <div  style={{ textAlign: 'center'}}>
      {/* <FloatingNav /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/smart-inventory' element={<SmartInventoryProject />} />
        <Route path='/yent-connect' element={<YentConnectProject />} />
        <Route path='/test-page' element={<TestPage />} />
        <Route path='/second-test-page' element={<SecondTestPage />} />
      </Routes>
    </div>
  );
}

export default App;
