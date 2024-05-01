import React from 'react'
import {NavLink} from "react-router-dom";

export default function NavbarBtn(props) {
    return (
        <div>
            <NavLink to={props.link} className={props.active ? "navbar-btn-active" : "navbar-btn"}>
                {props.children}
            </NavLink>
        </div>
    )
}