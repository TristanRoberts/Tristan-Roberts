import './App.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import HabitTracker from "./pages/HabitTracker.js"; 
import About from "./About"; //with .js extension or without?
import Home from "./Home.js"; 

function App() {
  const title = "Tristan Roberts Website";
  const description = "A Boston based software engineer looking for junior level roles."; 


  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <div className="App-header-top">
            <h1>Tristan Roberts's Website</h1>
          </div>
          <div className="App-header-bottom">
              <Link className='Page-link' to="/">Home page link</Link>
              <Link className="Page-link" to="/About">About me link</Link>
              <Link className="Page-link" to="/HabitTracker">Habit Tracker link</Link> 
          </div>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/HabitTracker" element={<HabitTracker/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

//design
//https://colorlib.com/wp/personal-websites/ 
//https://www.hostinger.com/tutorials/web-developer-portfolio

// https://www.geeksforgeeks.org/reactjs/link-component-in-react-router/
// https://www.geeksforgeeks.org/reactjs/how-to-link-a-custom-react-component-mybutton-to-another-page/

// https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
// https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
// https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
// https://developer.mozilla.org/en-US/docs/Web/CSS/position

/*
<div className="App">
      <header className="App-header">



Notes:
  1. Bottom Header, find a way to style it with links and " | " as spacing
  2. when cursor is over link component highlight it
  2. Make the header smaller, grey, 
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
  * In css file, "px" are pixels, "vh" is viewport height (proportional to window size). 
  * "<a href=www.stuff.com>" used for external websites or internal pages full refresh. "<Link>" is for not full page refresh internal routing
*/