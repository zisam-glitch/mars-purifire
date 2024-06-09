'use client'

import CountUp from 'react-countup';

export default function Counter(){
    return(
        <div className="row sticky-bar">
            <div className="col-md-12 col">
                <div className="counter-box position-relative">
                    <h1 className="mb-0 fw-bold text-primary"><CountUp start={0} end={11} className="counter-value"/>+</h1>
                    <span className="counter-head fw-normal h6">Designers & <br/> developers</span>
                </div>
            </div>

            <div className="col-md-12 col mt-md-4">
                <div className="counter-box position-relative">
                    <h1 className="mb-0 fw-bold text-primary"><CountUp start={0} end={5} className="counter-value"/></h1>
                    <span className="counter-head fw-normal h6">Years of <br/> Experience</span>
                </div>
            </div>
        </div>
    )
}