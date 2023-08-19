import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

import {ReactComponent  as Morebtn } from '../asset/more.svg';

import "./Navbar.css";


const Navbar = () => {
    const [showButton, setShowButton] = useState()
    const [showDrawer,setShowdrawer] = useState(false)
    useEffect(() => {
        showButtonhanlder()
        window.addEventListener("resize", showButtonhanlder)
        // return () =>
        //     window.addEventListener("resize", showButtonhanlder)
    },[])

    const showButtonhanlder = () => {
        if (window.innerWidth > 576){
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }

    return (
        <div className="navbar-container">
            <div className="logo">
                <NavLink to="/"><strong>Wix.Dev</strong></NavLink>
            </div>
            {showButton ?
                <div className="navbar-btn">
                    <NavLink to="/About">About me</NavLink>
                    <NavLink to="/exp">Projects</NavLink>
                    <NavLink to="/services">Services</NavLink>
                </div> :
                    <Morebtn style={{stroke:'white', width:'40px'}} onClick={() => setShowdrawer(!showDrawer)}/>
            }
            {showDrawer &&
                <div className="navbar-drawer">
                    <div className="navbar-btn">
                        <NavLink to="/About">About me</NavLink>
                        <NavLink to="/exp">Projects</NavLink>
                        <NavLink to="/services">Services</NavLink>
                    </div>
                </div>
            }

        </div>

    )
}

export default Navbar;