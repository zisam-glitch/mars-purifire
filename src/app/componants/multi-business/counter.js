'use client'

import CountUp from 'react-countup';

export default function Counter(){
    return(
        <div className="row">
            <div className="col-md-3 col-6">
                <div className="counter-box position-relative text-center">
                    <h2 className="mb-0 display-2 fw-bold title-dark mt-2 opacity-1"><CountUp start={0} end={5458}/></h2>
                    <span className="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0">Investment Projects</span>
                </div>
            </div>

            <div className="col-md-3 col-6">
                <div className="counter-box position-relative text-center">
                    <h2 className="mb-0 display-2 fw-bold title-dark mt-2 opacity-1"><CountUp start={0} end={15}/></h2>
                    <span className="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0">Years of Experience</span>
                </div>
            </div>

            <div className="col-md-3 col-6">
                <div className="counter-box position-relative text-center">
                    <h2 className="mb-0 display-2 fw-bold title-dark mt-2 opacity-1"><CountUp start={0} end={54}/></h2>
                    <span className="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0">Offices in the World</span>
                </div>
            </div>

            <div className="col-md-3 col-6">
                <div className="counter-box position-relative text-center">
                    <h2 className="mb-0 display-2 fw-bold title-dark mt-2 opacity-1"><CountUp start={0} end={214}/></h2>
                    <span className="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0">Successful Cases</span>
                </div>
            </div>
        </div>
    )
}