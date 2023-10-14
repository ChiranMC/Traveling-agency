import React from 'react'
import videoBg from './HomepageAssests/homepageVid.mp4'
import './home.css'
const Home = () => {
    return (
        <div className="HomePage">
            <video src={videoBg} autoPlay loop/>
            <center>
            <div className="content">
                <h1>Welcome to <span className="sltext">S</span>ri <span className="ltext">L</span>anka</h1>
                <p>Experience a captivating adventure with us!</p>
            </div>
            </center>
        </div>
    )
}

export default Home