import React from 'react'
import './package.css'
import bgimage from './PackageAssets/packages.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
const Packages = () => {
    return (
        <section className='packagesPage'>
            <img src={bgimage}/>
            <div className="packagemaintext">
                <h1>Packages We Offer !</h1>
            </div>
            <div className="containert center justify-content-center">
                <div className="Packages-Board">
                <br/>    
                

                </div>
            </div>
            <div className="rowd rows">

                    <div className="card">
                        <div className="card-image card-1">
                        </div>
                        <h2 className="h2-incards">3 Day Package</h2>
                        <p className="h2-incards">
                            Days: 3<br/>
                            locations: Kandy,Yala
                            Maximum Members: 5<br/>
                            Amount per Members:Rs35,000

                        </p>
                        <a href="/Payments1" className="btn-readmore">Register</a>
                    </div>

                    <div className="card">
                        <div className="card-image card-2">
                        </div>
                        <h2 className="h2-incards">6 Day Package</h2>
                        <p className="h2-incards">
                            Days: 6<br/>
                            locations: Kandy,Galle,Jaffna
                            Maximum Members: 5<br/>
                            Amount per Members:Rs65,000
                        </p>
                        <a href="/Payments2" className="btn-readmore">Register</a>
                    </div>

                    <div className="card">
                        <div className="card-image card-3">
                        </div>
                        <h2 className="h2-incards">9 Day Package</h2>
                        <p className="h2-incards">
                            Days: 9<br/>
                            locations:Galle,Kandy,Jaffna,Yala
                            Maximum Members: 5<br/>
                            Amount per Members:Rs95,000
                        </p>
                        <a href="/Payments3" className="btn-readmore">Register</a>
                    </div>


                </div>
        </section>
    )
}

export default Packages