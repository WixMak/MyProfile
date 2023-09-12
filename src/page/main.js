import React, {useEffect, useState} from "react";

import Contact from "../components/Contact";
import Techstack from "../components/Techstack";
import "./main.css";
import myself from '../asset/myself.jpeg';
import resume from '../asset/Wix_Developer_Resume.pdf';



const Main = () => {
    const [showAvatar, setShowAvatar] = useState();

    useEffect(() => {
        showAvatarHandler()
        window.addEventListener("resize", showAvatarHandler)
    })

    const showAvatarHandler = () => {
        if (window.innerWidth > 576) {
            setShowAvatar(true);
        } else {
            setShowAvatar(false);
        }
    }

    return (
        <div className="main-container">
            <div className="intro">
                <div>
                    <p>Hello! I am <br/>
                        <h1>Wix Mak,</h1>
                        <h3><strong>Web & APP Developer</strong></h3>
                        Currently located in Melbourne Australia
                    </p>
                    <a href={resume} download="Wix_Resume.pdf" target="_blank" rel="noreferrer">
                        My Resume
                    </a>
                </div>

                {
                    showAvatar &&
                    <div className="avatar-border">
                        <div className="my-avatar">
                            <img src={myself} alt="myself" width={400} height={700}/>
                        </div>
                    </div>
                }

            </div>

            <Techstack />
            <Contact/>

        </div>
    )

}

export default Main