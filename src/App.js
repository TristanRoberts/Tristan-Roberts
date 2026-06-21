import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

import './App.css';
import HabitTracker from "./pages/HabitTracker.js"; 
import About from "./About"; //with .js extension or without?
import Home from "./Home.js"; //"./Home.js"; 
import Resume from "./Resume.js"; 
import LinkedInPicture from "./assets/linkedIn_profile_picture.jpg"; 

//Does this affect the below lines? 


//https://blog.react-pdf.dev/top-6-pdf-viewers-for-reactjs-developers-in-2025
//https://medium.com/better-programming/how-to-display-download-and-create-pdf-files-in-react-65d2e7ddead7
//Test 1
//Test 2
//Test 3
//Test 4
// Making a change here


function App() {
  const title = "Hi, I'm Tristan Roberts";
  const description = "A junior software engineer with experience primarily in full-stack development but a graduate from Rensselaer Polytechnic Institute with a Bachleor's in Computer Science looking to dive into any role that is software related. "; 


  return (
    <body className="App">
      <BrowserRouter>
        <header className="App-header">
          <Link className="App-header-left" to="/">
              <img className= "LinkedIn-picture" src={LinkedInPicture} alt="LinkedIn Picture"/>
              <span>Tristan Roberts</span>
          </Link>
          <div className="App-header-right">
              
              <Link className='Page-link' to="/">Home</Link>
              <div className="Vertical-line" />
              <Link className='Page-link' to="/Resume">Resume</Link>
              <div className = "Vertical-line" />
              <Link className="Page-link" to="/About">About Me</Link>
              <div className="Vertical-line" />
              <Link className="Page-link" to="/HabitTracker">Habit Tracker</Link> 
          </div>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Resume" element={<Resume/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/HabitTracker" element={<HabitTracker/>} />
          </Routes>
        </div>
        <footer>

        </footer>
      </BrowserRouter>
    </body>
  );
}

export default App;

/*

    const myElement = document.getElementById('myId');
    for (let i = 0; i < myElement.attributes.length; i++) {
        const attribute = myElement.attributes[i];
        console.log(`${attribute.name}: ${attribute.value}`);
    }



    const myElement = document.getElementById('myId');
    const properties = Object.keys(myElement);
    properties.forEach(prop => {
        console.log(`${prop}: ${myElement[prop]}`);
    });





*/



//design
//https://colorlib.com/wp/personal-websites/ 
//https://www.hostinger.com/tutorials/web-developer-portfolio
//https://prismic.io/blog/css-hover-effects
//https://unsplash.com/s/photos/website-background

// https://www.geeksforgeeks.org/reactjs/link-component-in-react-router/
// https://www.geeksforgeeks.org/reactjs/how-to-link-a-custom-react-component-mybutton-to-another-page/

// https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
// https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
// https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
// https://developer.mozilla.org/en-US/docs/Web/CSS/position

/*
<div className="App">
      <header className="App-header">

Design Questions:
* Single page vs multipage? 
  * Do i want a single page or multipage app or combination of the two? 
  * If single page, is there any content that feels like it should be its own page?
  * If multipage, is it too convoluted and too hard to follow? how can we condense content so it makes sense?
  * If combination, what is the main content on the single page and what are the branches? SHould the branches be 
  consistent in their content e.g. case work? Or looser restrictions for what is an independent page. 

Notes:
  1. Bottom Header, find a way to style it with links and " | " as spacing
  2. Print out the properties of elements to see what gets passed down and what is automatic for that type of tag. 
          Look at why display flex was overridden. How many children does flexbox permeate through?
  3. Resume page with downloadable pdf
  4. LinkedIn link, Github Link, etc. 
  5. Make sure all the hovers are consistent in their color. 
  6. Maybe instead of different pages we have the link point to different parts of the same page (it scrolls for you). 
  7. Hover might work best when there is a thin border outlining what will be highlighted. 
  8. Make a bottom of the page dark section with all links and contact. 
  9. Goals and aspirations. AWS certification, Masters in AI. 
  10. Spinning animation for hover effect. 
  11. Take out notes and put them in google drive. 
  12. main tag should not have duplicated content. 
  13. Use head? tag to name the tab in the browser. 
  14. Make a simple fainlty grey horizontal line to separate main content. 
  15. Open each page in a minimized window to adjust flex box and vh vs px. 

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
  * Block vs Inline: tags such as <div> or <p> are block and will start on a new line and add margin. Tags such as <span> are inline and do not start on a newline and only take up limited space. 
  * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  * 
*/
