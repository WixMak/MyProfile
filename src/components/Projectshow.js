import React from 'react';

import Rightarrow from "../asset/rightarrow.svg";
import CodeIcon from "../asset/code-circle.svg";
import "./Projectshow.css";

const Projectshow = props => {
    const {id, name, description, tech, link, havCode, src} = props
    const getStyle = () => {
        if (id % 2 === 0) {
            return "left"
        } else {
            return "right"
        }
    }
    return (
        <div className="project-showcase-container">
            <div className={`project-showcase-${getStyle()}`}>
                <div className="project-showcase-desc">
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <h3>Tech: {tech}</h3>
                    <div className="btn-group">
                        <a href={`${link}`} className="live-btn">
                            {link ?
                                <>
                                    <h2>Go Live</h2>
                                    <img src={Rightarrow} alt="rightarrow"/>
                                </> : <span>Sorry cannot provide the link at the moment</span>
                            }

                        </a>
                        {havCode ?
                            <a href={`${havCode}`} className="live-btn">
                                <h2>Code</h2>
                                <img src={CodeIcon} alt="rightarrow"/>
                            </a> : null
                        }
                    </div>
                </div>
                <img src={src} className="project-showcase-img" alt={name}/>
            </div>
        </div>

    )
}

export default Projectshow
