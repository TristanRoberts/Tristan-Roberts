import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HabitTracker from "./pages/HabitTracker.js";

function App() {
  const title = "Tristan Roberts Website";


  return (
    <div className="App">
      <header className="App-header">
        <h1> {title} </h1>
      </header>
      <body>
        <a href="https://www.w3schools.com/css/">https://www.w3schools.com/css/</a>
      </body>
    </div>
  );
}

export default App;
