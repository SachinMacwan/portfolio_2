import React from 'react';

import "./Experience.css"

const Experience = () => {
    return (
        <div className="main_div" >
                <div className="section_title" id="experience" >
                    <h2>Experience</h2>
                </div>

            <div className="main_divsec" >



                <div className="experience_1">
                    <div className="job_title">
                        <p> Aye Lab</p>
                    </div>

                    <div className="job_duties">
                        <ul>
                            <li>Developed and maintained code for in-house and client websites primarily utilizing
                            HTML, CSS, JavaScript, and jQuery
                            </li>
                            <li>Tested code in various browsers and mobile devices to ensure cross-browser
                            compatibility and responsiveness
                            </li>
                            <li>Collaborated closely with other developers and producers to meet deadlines for
                            clients
                            </li>
                        </ul>
                    </div>

                    <div className="techs_worked">
                        <p> HTML CSS JavaScript MySQL
                        </p>
                    </div>
                
                </div>

                <div className="experience_1">
                    <div className="job_title">
                        <p>Cultural Infusion</p>
                    </div>

                    <div className="job_duties">
                        <ul>
                            <li>Designed and developed various web applications
                            </li>
                            <li>Worked with variety of languages such as PHP, HTML, CSS, JavaScript and jQuery
                            </li>
                            <li>Communicate and collaborate with other engineers and team-members
                            </li>
                            <li>Used MSBI to migrate data from local computer to server
                            </li>
                        </ul>
                    </div>

                    <div className="techs_worked">
                        <p> HTML CSS JavaScript PHP MSBI
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;