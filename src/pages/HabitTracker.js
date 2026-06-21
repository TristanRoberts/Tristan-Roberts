import { Link } from "react-router-dom";

function HabitTracker() {

    const title = "Habit Tracker";

    //what happens if we have the link in body, link in header, link just in classname="HabitTracker", or link in a completely separate function? 
    return (
        <div>
            <h1>HabitTracker</h1>
        </div>


    );

}

export default HabitTracker; 

/*


<div classname="HabitTracker">
            <header classname="HabitTracker-header"> 
                <h1> {title} </h1>
            </header>
            <body>
                <Link to="/HabitTracker">maybe a link???</Link>
            </body>
        
        </div>

*/