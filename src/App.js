import './App.css';
import Card from "@mui/material/Card";
import TestPage from './TestPage';
import SecondTestPage from './SecondTestPage';

function App() {
  return (
    <div style={{textAlign: "center"}}>
      
      levi deutsch portfilio website
      this is for the second commit 
      im adding a 3rd line to see how it looks
      <Card style={{width: "50%", height: "50%", marginTop: "40px", backgroundColor: "red", margin: "0 auto"}}>
        this is my first card
      </Card>
      <TestPage />
      <br />
      <SecondTestPage />
    </div>
  );
}

export default App;
