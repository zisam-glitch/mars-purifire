'use client'
import React from "react";
import Image from "next/image";

import Carousel from 'react-bootstrap/Carousel';
import { clientData2 } from "../../data/data";

export default function ClientsThree(){
   
    return(
        <div className="row">
            <div className="col-12">
                <div className="testi-carousel">
                <Carousel indicators={false}>
                    {clientData2.map((item, index)=>{
                        return(
                        <Carousel.Item  key={index}>
                            <div className="text-center">
                                <i className="mdi mdi-format-quote-open mdi-48px text-primary"></i>
                            </div>
                            <div className="testi-box mx-auto text-center mt-4">
                                <h5 className="fw-normal mt-3">{item.title}</h5>
                            </div>
                            <span className="d-flex justify-content-center align-items-center mt-4">
                                <Image src={item.image} width={80} height={80} alt="" className="avatar avatar-md-md rounded-pill"/>
                            </span>
                        </Carousel.Item>
                        )
                    })}
                </Carousel>
                </div>
            </div>
        </div>
    )
}