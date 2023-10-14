import React from 'react'
import "./adminnavbar.css"
import {GiIsland} from 'react-icons/gi'

const AdminNavbar = () => {
    return (
        <nav className="navBar">
            <div className="logo">
                <GiIsland className="icon"/>
                Ceylon Travels
            </div>
        </nav>

    )
}

export default AdminNavbar
