import React from 'react'
import Card from "../components/Card";
import photo01 from "../asset/myphoto/DSC05053.JPG";
import photo02 from "../asset/myphoto/DSC05067.JPG";
import photo03 from "../asset/myphoto/DSC05083.JPG";
import photo04 from "../asset/myphoto/DSC03197.JPG";

import "./Photoshow.css";
const Photoshow = () => {
    return (
        <div className="hobby">
            <h1>I am also a photographer !</h1>
            <h1>Check out My photos !</h1>
            <div className="photo-showcase">
                <Card src={photo01} alt="first" title="Melbourne" description="Pellegrini's Espresso Bar"/>
                <Card src={photo02} alt="second" title="Melbourne" description="The Paperback Bookshop"/>
                <Card src={photo03} alt="third" title="Melbourne" description="Flinder Station"/>
                <Card src={photo04} alt="fouth" title="Hong Kong" description="Causeway Bay Typhoon Shelter Breakaway Light House"/>

            </div>
        </div>
    )
}

export default Photoshow


