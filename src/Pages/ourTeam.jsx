import React from 'react'
import { TeamList } from '../Components/teamData'
import './ourTeam.css'


const OurTeam = () => {
    return (
        <>
            <div className="container">
                <h1>Our Team</h1>
                <hr />
                <div className="row">
                    {TeamList.map((item, index) => {
                        return (
                            <div className="col">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={item.memPic} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.memName}</h5>
                                        <a href="#" className="btn btn-primary">Get Resume</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default OurTeam
