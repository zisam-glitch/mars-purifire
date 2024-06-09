'use client'
import CountUp from 'react-countup';

import { counterData } from "../../data/data"
export default function Counter(){
    return(
        <>
         <div className="container section">
                <div className="row justify-content-center">
                    {counterData.map((item,index)=>{
                        return(
                        <div className="col-md-3 col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0" key={index}>
                            <div className="text-center">
                                <h6 className="text-white title-dark mb-0">{item.title}</h6>
                                <h2 className="mb-0 display-6 mt-3 fw-bold text-primary"><CountUp start={0} end={item.max}></CountUp>{item.title2}</h2>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}