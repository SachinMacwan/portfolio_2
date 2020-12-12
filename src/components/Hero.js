import React from 'react';
import "./Hero.css";

const Hero = () => {

     return (
        <div style={{height:"100vh"}} className="main_div" id="Home">
            <section className="main_sec">
            <h1 className="h_1"> 
                G'Day, My Name is
            </h1>
            
            <h1 className="h_2">
                Sachin Macwan
            </h1>

            <h1 className="h_3">
                I am Software Engineer 
            </h1>
        
        
            {/* <p className="h_4">
            Hello, I am Sachin. I am a Software Developer based in Melbourne, Australia. 
            I a fresh graduate and now learning new segments of Software engineering mainly focused
            on web development. As a Software Engineer, I enjoy learning better ways to create seamles 
            user experiences with clean and effcient code. Here are some of the techonologies I am working with recently.
            </p> */}
            </section>

        </div>
    );
};

export default Hero;