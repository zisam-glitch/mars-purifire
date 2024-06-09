'use client'

import React,{useState} from "react";
import Link from "next/link"
import Image from "next/image"
import { MdArrowForward} from "../../assets/icons/vander"

import { CoWorktabData } from "../../data/data";


export default function Tab(){
    let [activeIndex, setActiveIndex] = useState(0)
    return(
        <>
        <div className="row">
            <div className="col-md-4 mt-4 pt-2">
                <ul className="nav nav-pills nav-justified flex-column bg-white rounded shadow p-3 mb-0 sticky-bar" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <Link href="#" scroll={false} onClick={() => setActiveIndex(0)} className={activeIndex === 0 ? "nav-link rounded active" : "nav-link rounded"}>
                            <div className="text-center pt-1 pb-1">
                                <h6 className="title fw-normal mb-0">Private Office</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="#" scroll={false} onClick={() => setActiveIndex(1)} className={activeIndex === 1 ? "nav-link rounded active" : "nav-link rounded"}>
                            <div className="text-center pt-1 pb-1">
                                <h6 className="title fw-normal mb-0">Dedicated Office</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="#" scroll={false} onClick={() => setActiveIndex(2)} className={activeIndex === 2 ? "nav-link rounded active" : "nav-link rounded"}>
                            <div className="text-center pt-1 pb-1">
                                <h6 className="title fw-normal mb-0">Kitchen Space</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="#" scroll={false} onClick={() => setActiveIndex(3)} className={activeIndex === 3 ? "nav-link rounded active" : "nav-link rounded"}>
                            <div className="text-center pt-1 pb-1">
                                <h6 className="title fw-normal mb-0">Meeting Rooms</h6>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="col-md-8 col-12 mt-4 pt-2">
                <div className="tab-content" id="pills-tabContent">
                    {CoWorktabData.map((item,index) =>{
                        return(
                            <div key={index}>
                                {activeIndex === index ? 
                                    <div className="tab-pane fade bg-white show p-4 rounded shadow" id="pills-private" role="tabpanel" aria-labelledby="private-office">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                                        <div className="mt-4">
                                            <p className="text-muted">This is required when, for example, the final text is not yet available. Dummy text is also known as fill text. It is said that song composers of the past used dummy texts as lyrics.</p>
                                            <Link href="#" className="text-primary">See More <MdArrowForward className="ms-1"/></Link>
                                        </div>
                                    </div> :""}
                            </div>
                            
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}