import React from 'react';
import "./About.css"

const About = () => {
    return (
            <div className="about_main">
            <div className="about_title" id="about" >
                    <h2>About me</h2>
                </div>
            <div className="about_content">
            <p className="h_4">
                Hello, I am Sachin. I am Software Engineer based in Melbourne, Australia.
                I am recent graduate and now learning new segments of Software engineering mainly focused
                on web development. As a Software Engineer, I enjoy learning better ways to create seamles
                user experiences with clean and effcient code. Here are some of the techonologies I am working with recently.
            </p>
            <p className="techs_work">
                Reactjs HTML CSS JavaScript
            </p>
            </div>
            </div>
        );
};

export default About;