import React from 'react';
import logo from "../newprofilepic.jpg"


const home = () => {
    return (
        <div className="container">
            <h1>Welcome!</h1>
            <img src={logo}  alt="myimage"/>
            <p>Hello and welcome to my portfolio! My name is Jody Jones and I am a Full Stack Developer. Within this site I have a showcase of completed works (my own and group work) and some projects that I am currently working on. Feel free to look around and reach out to me at anytime! Thank you for your time.</p>
        </div>
    );
}

export default home;