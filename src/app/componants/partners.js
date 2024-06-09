import React from "react";
import Image from "next/image";

import { partners } from "../data/data";

export default function Partners(){
   
    return(
        <div className="row justify-content-center">
            {partners.map((item, index)=>{
                return(
                    <div className="col-lg-2 col-md-2 col-6 text-center mt-4 pt-2" key={index}>
                        <Image src={item} width={75} height={24} className="avatar avatar-ex-sm" alt=""/>
                    </div>
                )
            })}
        </div>
    )
}