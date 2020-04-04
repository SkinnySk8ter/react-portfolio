import React from 'react';
import linked from "../0.png"
import git from "../github.png"
 
const resume = () => {
    return (
       <div className="container">
          <h1>Resume isComing Soon!!!</h1>
          <p>For now check out my Linkedin and Github profiles to know more about me.</p>
        <div className="imgcontainer">
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/jody-jones-aaa338172/"> <img className="img" src={linked} alt="linkedin" /> </a>
       </div>
       <div className="imgcontainer">
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/SkinnySk8ter"> <img className="img" src={git} alt="github" /> </a>
       </div>
       

      </div>
       
    );
}
 
export default resume;
