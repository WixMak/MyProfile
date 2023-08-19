import React, {useRef, useState} from "react";
import emailjs from 'emailjs-com';


import LinkedinIcon from '../asset/icons8-linkedin.svg';
import Ig from '../asset/icons8-instagram.svg';
import Github from '../asset/icons8-github.svg';

import "./Contact.css";
const Contact = () => {
    const [emailsent, setEmailsent] = useState(false)
    const form = useRef();

    const sendEmailHandler = (event) => {
        event.preventDefault()

        emailjs.sendForm('service_us3bpwb', 'template_esvd78y', form.current, '7ne5ZAIjxS7KwzKSi')
            .then(() => {
                setEmailsent(true);
                alert("Thanks for your message!, I will reply you ASAP !");
            }, () => {
                alert("Something goes wrong ! Please try again");
            });


    }
    return (
        <div className="contact-container" onSubmit={sendEmailHandler}>
            <h1>Let Us Keep In Touch!</h1>
            <form ref={form} onSubmit={sendEmailHandler} className="contact-form">

                <input type="text" id="name" name="name" placeholder="Name" /><br/>

                <input type="email" id="email" name="email" placeholder="Email" required/><br/>

                <input type="text" id="subject" name="subject" placeholder="Subject" required/><br/>

                <textarea id="email" name="message" placeholder="Message" required/><br/>


                <button disabled={emailsent} type="submit">Submit</button>
            </form>
            <div className="contact-info">
                <div>
                    <h4>
                        Email: makwaiyeung123@gmail.com
                    </h4>

                </div>
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


        </div>
    )
}

export default Contact;