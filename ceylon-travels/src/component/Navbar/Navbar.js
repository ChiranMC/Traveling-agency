import React from 'react'
import "./navbar.css"
import {GiIsland} from 'react-icons/gi'

const Navbar = () => {
    return (
        <nav className="navBar">
            <div className="logo">
                <GiIsland className="icon"/>
                Ceylon Travels
            </div>
            <ul className="navlinks">
                <li>
                    <a href="/home" className="LinksCustomization">Home</a>
                </li>
                <li>
                    <a href="/packages" className="LinksCustomization">Packages</a>
                </li>
                <li>
                    <a href="/about" className="LinksCustomization">About</a>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar
