import React from 'react';

import Photoshow from "../components/Photoshow";

import "./About.css";
const About = () => {
    return (
        <div>
            <div className="about-intro">
                <h1>I AM HERE TO HELP YOUR NEXT PROJECT !</h1>
                <p>
                    I am a computer science graduate from Deakin University with excellent time management, teamwork, and communication skills,
                    My expertise in front-end development using HTML, CSS, JavaScript, React.js, and React Native allows me to create engaging and visually appealing user interfaces.

                </p>
            </div>

            <Photoshow />
        </div>

    )
}

export default About
