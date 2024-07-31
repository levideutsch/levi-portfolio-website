import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Card from "@mui/material/Card";
import TestPage from './TestPage';
import SecondTestPage from './SecondTestPage';
import Home from './Home';

function App() {
  return (
    <div style={{textAlign: "center"}}>
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Home />}/>
        <Route path='/test-page' element={<TestPage />}/>
        <Route path='/second-test-page' element={<SecondTestPage />}/>
      </Routes>
      </BrowserRouter>
      
      {/* levi deutsch portfilio website
      this is for the second commit 
      im adding a 3rd line to see how it looks
      <Card style={{width: "50%", height: "50%", marginTop: "40px", backgroundColor: "red", margin: "0 auto"}}>
        this is my first card
      </Card> */}
      

    </div>
  );
}

export default App;
