import React from "react";

import Projectshow from "../components/Projectshow";
import './Experience.css';

import Jpex from "../asset/projects/img.png";
import Dm from "../asset/projects/dm.png";
import GameMA from "../asset/projects/gamema.png";

const projectList = [
    {
        id:1,
        name:"JPEX Crypto Platform",
        description:"Jpex is a global digital asset trading platform which have numinous user trading crypto on it everyday. " +
            "I mainly focus on Web/App frontend development for this project and worked in a 12 persons team including backend team, frontend team and designer.",
        tech:"React, React-Native, Redux, Ant-design",
        link:"https://jp-ex.io/en/home",
        src:Jpex
    },
    {
        id:2,
        name:"Discount-Mate",
        description:"Discount-Mate is a mobile application that thought machine learning model to shows supermarket discount for user. " +
            "I developed the frontend, connected to backend and designed the software structure for this project " +
            "We used a Optical character recognition script to scar the receipt for our machine model training.",
        tech:"React-Native, Redux, Node.js",
        link:"https://drive.google.com/file/d/17kSARXe0oeIkZyJ55NUuWNW4NgQyUpwe/view?usp=drive_link",
        src:Dm,
        havCode:"https://github.com/discountmate/dm_app"
    },
    {
        id:3,
        name:"Game Market Analysis",
        description:"The aims of this project is to visualise the game market data and check out if there is any useful information and business value. " +
            "I used Tableau to do this visualization. ",
        tech:"Tableau",
        link:"https://public.tableau.com/app/profile/wai.yeung.mak/viz/Videogamedata_16\n" +
            "871706563950/Dashboard1#1",
        src:GameMA,
    },
]
const Experience = () => {


    return (
        <div className="project-container">
            <h1>Projects that I have done or involved !</h1>
            {projectList.map( ele => {
                return(
                    <Projectshow
                        id={ele.id}
                        name={ele.name}
                        description={ele.description}
                        tech={ele.tech}
                        link={ele.link}
                        src={ele.src}
                        havCode={ele.havCode || null}
                    />
                )
                }
            )}

            <h1>More Projects Are On-Going ~~~</h1>
        </div>
    )
}

export default Experience;