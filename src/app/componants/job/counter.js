'use client'
import CountUp from 'react-countup';

import { counterData  } from "../../data/jobData";
export default function Counter(){
    return(
    <div className="row">
        {counterData.map((item,index) => {
            return(
            <div className="col-md-3 col-6" key={index}>
                <div className="counter-box position-relative text-center">
                    <h2 className="mb-0 display-3 fw-bold title-dark mt-2 opacity-1"><CountUp start={0} end={item.max}/>{item.name}</h2>
                    <span className="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0 fs-5">{item.title}</span>
                </div>
            </div>
            )
        })}
    </div>
    )
}