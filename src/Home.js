import React from "react"; 
import { Link } from "react-router-dom";

import GitHubLogo from "./assets/socials/githubLogo.png";
import LinkedInLogo from "./assets/socials/linkedInLogo.png";

const Home = ()  => {

    return(
        <div>
            <h1>Home</h1>
            <div className="Introduction">
                Introduction. Top links or side social links. Resume, projects, contact info, github, linkedin. 
                The links should be consistent so all external links in one place, same page links in one place. 
                
                Susan adivce: 1. DOnt have same page links "i can just read" 2. Links to new pages so long as it "doesnt go too deep"
                3. Homepage can be the About me page. Just have name, summary, and email. Email should be one of the first things you see. 
                4. Just name and email at bottom of every page in the black footer. 5. Homepage, Hi im tristan, bigger graphic, maybe picture of me, skills section. 
                Keep the long descriptions at the bottom of the homepage, keep name, picture of me (if i want it) and email visible from first load of page. 6. Resume link is in header link. 
                <div className="Socials-sidebar">
                    <img className="Socials-icon" src={GitHubLogo}/>
                    <img className="Socials-icon" src={LinkedInLogo}/>
                </div>
            </div>
            <div>
                <p> Content </p>
                <p> Content </p>
                <p> Content </p>
                <p> Content </p>
                <p> Content </p>
                <p> Content </p>
            </div>
        </div>
    );
}

export default Home; 