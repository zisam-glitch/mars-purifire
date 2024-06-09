'use client'
import CountUp from 'react-countup';
export default function Counter(){
    return(
        <div className="row">
            <div className="col-md-6">
                <h3 className="fw-semibold mb-0"><CountUp className="counter-value" start={0} end={9}/>+</h3>
                <h6 className="fw-normal text-muted mb-0">Years of Experience</h6>
            </div>

            <div className="col-md-6">
                <h3 className="fw-semibold mb-0"><CountUp className="counter-value" start={0} end={1542}/>+</h3>
                <h6 className="fw-normal text-muted mb-0">Total Photo Click </h6>
            </div>
        </div>
    )
}