import './App.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import HabitTracker from "./pages/HabitTracker.js"; //play with this for 'element'
import About from "./About"; //with .js extension or without?

function App() {
  const title = "Tristan Roberts Website";


  return (
    <div className="App">
      <header className="App-header">
        <h1>My Header</h1>
      </header>
      <BrowserRouter>
        <Link to="/About">About me link</Link>
        <br />
        <Link to="/HabitTracker">Habit Tracker link</Link> 
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/HabitTracker" element={<HabitTracker/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// https://www.geeksforgeeks.org/reactjs/link-component-in-react-router/
// https://www.geeksforgeeks.org/reactjs/how-to-link-a-custom-react-component-mybutton-to-another-page/

/*
<div className="App">
      <header className="App-header">



Notes:
  * i should add another component just like above to test what it does. It should 
  just still have "My Header" but erase the "About Me" title that pops up

Learned:
  * <Link to="/HabitTracker"> This is a link </Link> --The Link is the actual link on screen
  and the "to" prop defines the url, http://localhost:3000/HabitTracker
  * <Routes> 
      <Route path="/about" element={<About />}>   --This is essentially just a file system to receive/store the links. 
      Where you place <Routes> is where the content will display (so if you had a header that you wanted on all
      pages then you would place the Header component above the <Routes>). <Link> has to be inside <BrowserRouter>. 
      'path="..."' is just the receiver for 'to="..."' prop. "element={...}" just tells the app what component to place 
      here when Link is clicked. 
*/