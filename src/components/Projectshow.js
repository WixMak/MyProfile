import React from 'react';

import Rightarrow from "../asset/rightarrow.svg";
import CodeIcon from "../asset/code-circle.svg";
import './Projectshow.css';

const Projectshow = props => {
    const getStyle = () => {
        if (props.id % 2 === 0) {
            return "left"
        } else {
            return "right"
        }
    }
    return (
        <div className="project-showcase-container">
            <div className={`project-showcase-${getStyle()}`}>
                <div className="project-showcase-desc">
                    <h1>{props.name}</h1>
                    <p>{props.description}</p>
                    <h3>Tech: {props.tech}</h3>
                    <div className="btn-group">
                        <a href={`${props.link}`} className="live-btn">
                            <h2>Live</h2>
                            <img src={Rightarrow} alt="rightarrow"/>
                        </a>
                        {props.havCode ?
                            <a href={`${props.havCode}`} className="live-btn">
                                <h2>Code</h2>
                                <img src={CodeIcon} alt="rightarrow"/>
                            </a> : null
                        }
                    </div>
                </div>
                <img src={props.src} className="project-showcase-img" alt={props.name}/>
            </div>
        </div>

    )
}

export default Projectshow
