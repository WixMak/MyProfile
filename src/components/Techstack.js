import React from 'react';

import Css from '../asset/tech_icon/css3.svg';
import Html from '../asset/tech_icon/html5.svg';
import ReactIcon from '../asset/tech_icon/react.svg';
import Node from '../asset/tech_icon/node.svg';
import Js from '../asset/tech_icon/Js.svg';
import Python from '../asset/tech_icon/py.svg';
import Docker from '../asset/tech_icon/docker.svg';
import Figma from '../asset/tech_icon/figma.svg';
import Gitlab from '../asset/tech_icon/gitlab.svg';
import Github from '../asset/tech_icon/github.svg';
import Ps from '../asset/tech_icon/Group 67.svg';
import Redux from '../asset/tech_icon/redux.svg';
import sql from '../asset/tech_icon/sql.svg';
import MongoDB from '../asset/tech_icon/mongoDB.svg';
import PostMan from '../asset/tech_icon/Postman.svg';
import "./Techstack.css";
const stackList = [
    {img:Html, name:"HTML"},
    {img:Css, name:"CSS"},
    {img:Js,  name:"JavaScript"},
    {img:Python, name:"Python"},
    {img:ReactIcon,  name:"React/React-Native"},
    {img:Redux,  name:"Redux"},
    {img:Node, name:"Node.js"},
    {img:sql, name:"MySQL"},
    {img:MongoDB, name:"MongoDB"},
    {img:Gitlab,  name:"Gitlab"},
    {img:Github,  name:"Github"},
    {img:Docker, name:"Docker"},
    {img:PostMan, name:"PostMan"},
    {img:Figma, name:"Figma"},
    {img:Ps, name:"Photoshop"},
]


const Techstack = () => {
    return (
        <div className="techstack-container">
            <h1>WHAT SKILLS DO I HAVE ?</h1>

            <div className="techstack-icon">
                {stackList.map(ele => {
                    return(
                        <div className="techstack-name">
                            <img src={ele.img} alt={ele.name} />
                            <span>{ele.name}</span>
                        </div>
                    )

                })}
            </div>


        </div>
    )
}

export default Techstack
