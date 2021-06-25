import React, { useState } from 'react'
import "./navbar.css"
import Logo from "../sources/sociallogo.png"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { Link } from "react-router-dom"


const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="landing-nav">
                <div className="landing-logo">
                    <img className="navbar-logo" src={Logo} /><span>Mozillo</span>
                </div>
                <ul className="landing-nav-links" style={{ transform: open ? "translateX(0px)" : "" }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/faqs">FAQs</Link></li>
                    <li><Link to="/ourteam">Our Team</Link></li>
                    <li><ImCross className="landing-toggle" onClick={() => setOpen(!open)} /></li>
                </ul>
                <FaBars className="landing-toggle" onClick={() => setOpen(!open)} />

            </nav>


        </>
    )
}

export default Navbar

