import React from 'react';

import Photoshow from "../components/Photoshow";

// import "./About.css";
const About = () => {
    return (
        <div>
            <div className="about-intro">
                <h1>I AM HERE TO HELP YOUR NEXT PROJECT !</h1>
                <p>
                    Recently I graduated from Deakin University with a Bachelor of computer science,
                    I possess a deep passion for web/mobile development,
                    with experience in front-end development using React.js and React Native for both websites and mobile applications.
                    I have a basic understanding of Figma and MySQL. I am actively learning about Node.js and database servers such as MongoDB in my personal time.
                    Joining your esteemed company would provide an excellent opportunity for me to demonstrate my abilities and contribute to its success.
                </p>
            </div>

            <Photoshow />
        </div>

    )
}

export default About
