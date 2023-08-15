import React from "react";

import Card from "../components/Card";
import "./main.css"
import photo01 from '../asset/DSC05053.JPG';
import photo02 from '../asset/DSC05067.JPG';
import photo03 from '../asset/DSC05083.JPG';
import photo04 from '../asset/DSC03197.JPG';
import myself from '../asset/myself.jpeg';


const Main = () => {
    return (
        <div className="main-container">
            <div className="intro">
                <p>Hello! I am Wix Mak,<br/>
                    a computer science graduate,<br/>
                    Currently located in Melbourne Australia
                </p>
                <div className="avatar-border">
                    <div className="my-avatar">
                        <img src={myself} alt="myself" width={400} height={700}/>
                    </div>
                </div>

            </div>
            <div className="hobby">
                <h1>I am also a photographer!</h1>
                <div className="photo-showcase">
                    <Card src={photo01} alt="first" title="Melbourne" description="Pellegrini's Espresso Bar"/>
                    <Card src={photo02} alt="second" title="Melbourne" description="The Paperback Bookshop"/>
                    <Card src={photo03} alt="third" title="Melbourne" description="Flinder Station"/>
                    <Card src={photo04} alt="fouth" title="Hong Kong" description="Causeway Bay Typhoon Shelter Breakaway Light House"/>

                </div>

            </div>

        </div>
    )

}

export default Main