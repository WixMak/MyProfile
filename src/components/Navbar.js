import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

import {ReactComponent  as Morebtn } from '../asset/more.svg';

import "./Navbar.css";
import NavbarBtn from "./NavbarBtn";


const Navbar = () => {
    const [showButton, setShowButton] = useState()
    const [showDrawer,setShowDrawer] = useState(false)
    const [activeTab, setActiveTab] = useState(window.location.pathname)

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

    const handleTabClick = (path) => {
        setActiveTab(path)
    }

    return (
        <div className="navbar-container">
            <div className="navbar-content">
                <div className="logo">
                    <NavLink to={"/"}><strong>Wix.Dev</strong></NavLink>
                </div>
                {showButton ?
                    <div className="navbar-btn">
                        <NavLink to={"/About"}>About me</NavLink>
                        <NavLink to={"/exp"}>Projects</NavLink>
                        <NavLink to={"/services"}>Services</NavLink>
                    </div> :
                    <Morebtn style={{stroke:'white', width:'40px'}} onClick={() => setShowDrawer(!showDrawer)}/>
                }
                {showDrawer &&
                    <div className="navbar-drawer">
                        <div className="navbar-btn">
                            <NavLink to="/About" onClick={() => setShowDrawer(false)}>About me</NavLink>
                            <NavLink to="/exp" onClick={() => setShowDrawer(false)}>Projects</NavLink>
                            <NavLink to="/services" onClick={() => setShowDrawer(false)}>Services</NavLink>
                        </div>
                    </div>
                }
            </div>
        </div>

    )
}

export default Navbar;