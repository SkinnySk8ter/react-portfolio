import React from 'react';
import logo1 from "../Capture.JPG"
import logo2 from "../CohortCollab.JPG"
import logo3 from "../dailyplanner.JPG"
import logo4 from "../notetaker.JPG"
import logo5 from "../yappe.JPG"
import '../PorfolioPage/portfolio.css'

const portfolio = () => {
   return (
      <div className="container">
         <h1>Portfolio</h1>
         <p>Below is a list of projects that I have completed either by myself of with a team of fellow cohorts. Take a look.</p>
         <div className="imgcontainer" >
           <a rel="noopener noreferrer" target="_blank" href="https://github.com/SkinnySk8ter/Random-PW"> <img className="img" src={logo1} alt="capture" /> </a>
           <p>Password Generator</p>
         </div>
         <div>
         <a  rel="noopener noreferrer" target="_blank" href="https://anzook.github.io/The-Git-Gud-Team/"> <img className="img" src={logo2} alt="cohortcollab" /> </a>
         <p>Cohort Collab - LIVE DEMO!!!</p>
         </div>
         <div>
         <a rel="noopener noreferrer" target="_blank" href="https://github.com/SkinnySk8ter/Daily-Planner">
            <img className="img" src={logo3} alt="dailyplanner" />
         </a>
         <p>Daily Planner</p>
         </div>
         <div>
         <a rel="noopener noreferrer" target="_blank" href="https://guarded-spire-72598.herokuapp.com/">
            <img className="img" src={logo4} alt="notetaker" />
         </a>
         <p>Note Taker App- LIVE DEMO!!!</p>
         </div>
         <div>
         <a rel="noopener noreferrer" target="_blank" href="http://yappe.herokuapp.com/">
            <img className="img" src={logo5} alt="YAPPE" />
         </a>
         <p>Yappe App- LIVE DEMO!!!</p>
         </div>

      </div>
   );
}

export default portfolio;