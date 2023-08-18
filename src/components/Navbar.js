import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

// import "./Navbar.css";
import {ReactComponent  as Morebtn } from '../asset/more.svg';



const Navbar = () => {
    const [showButton, setShowButton] = useState()
    useEffect(() => {
        showButtonhanlder()
        window.addEventListener("resize", showButtonhanlder)
        // return () =>
        //     window.addEventListener("resize", showButtonhanlder)
    },[])

    const showButtonhanlder = () => {
        console.log()
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
                    <Morebtn style={{stroke:'white', width:'40px'}} onClick={() => console.log('clicked')}/>
            }

        </div>

    )
}

export default Navbar;