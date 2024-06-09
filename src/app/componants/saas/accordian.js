'use client'
import React,{useState} from "react";

import {saasAccordian} from "../../data/data";

export default function Accordion(){
    let [activeIndex, setActiveIndex] = useState(0)
    return(
    <div className="accordion mt-4" id="buyingquestion">
        {saasAccordian.map((item,index)=>{
            return(
                <div className="accordion-item rounded shadow mt-2" key={index}>
                    <h2 className="accordion-header" >
                        <button className={`${activeIndex === item.id ? "active accordion-button fw-normal border-0 bg-light rounded shadow" : "accordion-button fw-normal border-0 bg-light rounded shadow collapsed"} `} onClick={() => setActiveIndex(item.id)}>
                            {item.title}
                        </button>
                    </h2>
                    {activeIndex === item.id ? 
                        <div  className=" border-0 " >
                            <div className="accordion-body text-muted bg-transparent">
                            {item.desc}
                            </div>
                        </div>:""
                    }
                </div>
            )
        })}
        
    </div>
    )
}