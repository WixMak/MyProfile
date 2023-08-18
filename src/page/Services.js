import React from "react";

// import "./Services.css";
const Services = () => {
    return (
        <div className="services-container">
            <div className="services-item">
                <h1>Web & App Development</h1>
                <p>
                    Wix provides you a best and professional web development services !
                    You will have all the access to the sources and once the project is done and you accepted the project,
                    I wont access your application anymore. I guarantee all the code is clean and If there is any problem about the product after sell,
                    It would be my pleasure to help with and there is <strong>no extra charge</strong> for the question session!
                </p>
                <p>
                    It will never happens something like:
                    <ul>
                        <li>"This application is so hard to develop again."</li>
                        <li>"I must find Wix to develop again because only he have all the access about the application."</li>
                        <li> "Only he know how to fix the problem! because all the code is hard code!"</li>
                    </ul>
                </p>
            </div>
            <div className="services-guarantee">
                <ul>
                    <li>
                        <h1>Time</h1>
                        <hr />
                        <p>All the project will be finished on time, I will never over due. Any of over due, you will gain a 50% refund immediately!</p>
                    </li>
                    <li>
                        <h1>Fixed-Price</h1>
                        <hr />
                        <p>If we agreed the price, the price would be increase in any situation. It only charges the price that we have agreed !</p>
                    </li>
                    <li>
                        <h1>After Service</h1>
                        <hr />
                        <p>If there is any question about the product after sell, feel free to contact me. No pay required!
                            If you want to add new function, you will get a 10% off </p>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Services;