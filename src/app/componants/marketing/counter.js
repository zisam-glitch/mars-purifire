'use client'

import CountUp from 'react-countup';

import { marketingCounterData } from "../../data/data";

export default function Counter(){
    return(
        <div className="row">
            {marketingCounterData.map((item,index)=>{
                return(
                <div className="col-md-3 col-6" key={index}>
                    <div className="counter-box position-relative text-center">
                        <h2 className="mb-0 display-2 fw-bold text-white title-dark mt-2 opacity-2"><CountUp className="counter-value" start={0} end={item.end}/></h2>
                        <span className="counter-head fw-normal text-white title-dark position-absolute top-50 start-0 end-0">{item.title}</span>
                    </div>
                </div>
                )
            })}
        </div>
    )
}