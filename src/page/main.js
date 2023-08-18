import React from "react";

import Contact from "../components/Contact";
import Techstack from "../components/Techstack";
// import "./main.css";
import myself from '../asset/myself.jpeg';



const Main = () => {
    return (
        <div className="main-container">
            <div className="intro">
                <p>Hello! I am <br/>
                    <h1>Wix Mak,</h1>
                    <h3><strong>Web & APP Developer</strong></h3>
                    Currently located in Melbourne Australia
                </p>
                <div className="avatar-border">
                    <div className="my-avatar">
                        <img src={myself} alt="myself" width={400} height={700}/>
                    </div>
                </div>

            </div>
            <Techstack />
            <Contact/>

        </div>
    )

}

export default Main