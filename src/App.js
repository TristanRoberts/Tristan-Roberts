import './App.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import HabitTracker from "./pages/HabitTracker.js"; //play with this for 'element'
import About from "./About"; //with .js extension or without?

function App() {
  const title = "Tristan Roberts Website";


  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-top">
          <h1>My Header</h1>
        </div>
        <div className="App-header-bottom">
          <h1>Bottom Header</h1>
        </div>
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
  1. Split the header into 2 sections. Top section is just centered "Tristan Roberts' website". Bottom has the icons/links
  2. Make the header smaller, grey, and rounded corners
  3. links or icons to other pages from the header (Home, About, Resume)
  4. Resume page with downloadable pdf

Learned:
  * <Link to="/HabitTracker"> This is a link </Link> --The Link is the actual link on screen
  and the "to" prop defines the url, http://localhost:3000/HabitTracker
  * <Routes> 
      <Route path="/about" element={<About />}>   --This is essentially just a file system to receive/store the links. 
      Where you place <Routes> is where the content will display (so if you had a header that you wanted on all
      pages then you would place the Header component above the <Routes>). <Link> has to be inside <BrowserRouter>. 
      'path="..."' is just the receiver for 'to="..."' prop. "element={...}" just tells the app what component to place 
      here when Link is clicked. 
  * "id" prop has to be unique per page. "className" (case sensitive) or "class" prop gives you the css styling. 
*/