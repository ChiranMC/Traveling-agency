import React from 'react'
import './adminlogin.css'

const AdminLogin = () => {
    return (
        <div className="loginForm">
            <h1>Admin Login</h1>
            <div className="register">
            <form className="container" action="/AdminHome">
                    <div className="cards">

                        <div className="card-body">
                            <div className="name">
                                <label>Username :</label>
                                <input className="form-control"></input>
                                <br/>
                                <label>Password :</label>
                                <input type="password" className="form-control"></input>
                            </div>
                            <br/>
                        </div>

                        <div className="card-footer">
                            <button type="submit" className="btn btn-Register">Login</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin
