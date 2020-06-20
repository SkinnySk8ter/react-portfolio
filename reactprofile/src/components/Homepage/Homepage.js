import React from 'react';
import logo from "../newprofilepic.jpg"
import '../Homepage/Homepage.css'


const home = () => {
    return (
        <div className="container">
            <h1>About me</h1>
            <img className='myimg' src={logo} alt="myimage" />
            <p>Hello and welcome! My name is Jody Jones and I am a Full Stack Developer. I have a passion for web development and learning more everyday as well as gaming. I believe actions speak louder than words so feel free to take a look around!</p>
            <hr></hr>
            <footer>
            <p>Author: Jody Jones</p>
            <p><a href="mailto:jodybjones@yahoo.com">jodybjones@yahoo.com</a></p>
        </footer>
        </div>

        
       
        
    );
}



export default home;