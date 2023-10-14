import React from 'react'
import './adminhome.css'

const AdminHome = () => {
    return (
        <div className="admindashboard">
            <nav className="navBarss">
            <ul className="navlinkss">
                <li>
                    <a href="/ListCustomerComponents" className="LinksCustomizations">Customers</a>
                </li>
                <li>
                    <a href="/Orders" className="LinksCustomizations2">Orders</a>
                </li>
            </ul>
            </nav>

            <div className="adminBoard admincontainerr">
            <h1 className="text-center adminlabel">Admin dashboard</h1>
            </div>
        </div>
    )
}

export default AdminHome
