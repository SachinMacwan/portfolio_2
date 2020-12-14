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
                <p>Hello, I am Sachin. I am a Software Engineer based in Melbourne, Australia.</p>
                <p>I am recent graduate and now learning new segments of Software engineering mainly focused
                on web development. As a Software Engineer, I enjoy learning better ways to create seamles
                user experiences with clean and effcient code.</p>
                <p> Here are some of the technologies I am working with recently. </p>
            </p>
            <p className="techs_work">
                Reactjs HTML CSS JavaScript
            </p>
            </div>
            </div>
        );
};

export default About;