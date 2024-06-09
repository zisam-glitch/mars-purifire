'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";

import { workData } from "../../data/studioData";

import {MdArrowForward} from "../../assets/icons/vander"

export default function Tab(){
    let [activeIndex, setActiveIndex] = useState(1);
    return(
        <>

        <div className="row">
            <div className="col-md-4 mt-4 pt-2">
                <ul className="nav nav-pills nav-justified flex-column bg-white rounded-0 shadow p-3 mb-0 sticky-bar" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <Link href="" scroll={false} className={activeIndex === 1 ? 'nav-link rounded-0 active' : 'nav-link rounded-0' } onClick={()=>setActiveIndex(1)} >
                            <div className="text-center py-1">
                                <h6 className="fw-normal mb-0">Project Strategy</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="" scroll={false} className={activeIndex === 2 ? 'nav-link rounded-0 active' : 'nav-link rounded-0' } onClick={()=>setActiveIndex(2)} >
                            <div className="text-center py-1">
                                <h6 className="fw-normal mb-0">UX Research and Concept</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="" scroll={false} className={activeIndex === 3 ? 'nav-link rounded-0 active' : 'nav-link rounded-0' } onClick={()=>setActiveIndex(3)}>
                            <div className="text-center py-1">
                                <h6 className="fw-normal mb-0">Creative Front-End</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="" scroll={false} className={activeIndex === 4 ? 'nav-link rounded-0 active' : 'nav-link rounded-0' } onClick={()=>setActiveIndex(4)}>
                            <div className="text-center py-1">
                                <h6 className="fw-normal mb-0">Content Strategy</h6>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="col-md-8 col-12 mt-4 pt-2">
                <div className="tab-content" id="pills-tabContent">
                    {workData.map((item,index)=>{
                        return(
                            <div key={index}>
                                {activeIndex === item.id ?
                                    <div className="tab-pane fade bg-white show  active p-4 rounded-0 shadow" key={index}>
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded-0 shadow" alt=""/>
                                        <div className="mt-4">
                                            <p className="text-muted">{item.desc}</p>
                                            <Link href="" className="text-primary">See More <MdArrowForward/></Link>
                                        </div>
                                    </div> :'' }
                            </div>
                            
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}