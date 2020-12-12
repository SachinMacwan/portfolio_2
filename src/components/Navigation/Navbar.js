import React from 'react';
import "./Navbar1.css"
import { Link } from "react-scroll";
import pdf from "../ResumeF.pdf"

const Navbar1 = props => {
    return (
        <nav className="main-nav">

            <div className="nav-logo">LOGO</div>

            <div />

            <div className="nav-items">
                    <li>
                        <Link
                            activeClass="active"
                            to="Home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Home
                            </Link>
                    </li>

                    <li>
                        <Link
                            activeClass="active"
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Work
                            </Link>
                    </li>

                    <li>
                        <Link
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={700}>
                            Experience
                            </Link>
                    </li>
                    <li>
                        <a href={pdf} target="_blank" rel="noopener noreferrer">Resume</a>
                    </li>
                
            </div>


        </nav>
    );
};

export default Navbar1;