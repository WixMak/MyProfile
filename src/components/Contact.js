import React from "react";


import LinkedinIcon from '../asset/icons8-linkedin.svg';
import Ig from '../asset/icons8-instagram.svg';
import Github from '../asset/icons8-github.svg';

import "./Contact.css"
const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Let Us Keep In Touch!</h1>
            <form className="contact-form">

                <input type="text" id="email" name="Name" placeholder="Name"/><br/>

                <input type="text" id="email" name="Email" placeholder="Email" required/><br/>

                <textarea id="email" name="Message" placeholder="Message" required/><br/>

                <button>Submit</button>
            </form>
            <div className="smbtn-group">
                <a href="https://www.linkedin.com/in/wai-yeung-mak">
                    <img src={LinkedinIcon} alt="LinkedinIcon" />
                </a>
                <a href="https://www.instagram.com/_wixmakmak/?hl=en">
                    <img src={Ig} alt="IgIcon" />
                </a>
                <a href="https://github.com/WixMak">
                    <img src={Github} alt="LinkedinIcon"/>
                </a>
            </div>

        </div>
    )
}

export default Contact;