'use client'
import React from "react"
import Link from "next/link"
import Image from "next/image"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import {projectMasonarydata} from "../../data/data"
export default function portfolioThree(){
    return(
        <>
        <div id="grid">
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                >
                <Masonry>
                    {projectMasonarydata.map((item,index) => {
                        return(
                            <div className="p-2 picture-item" key={index}>
                                <div className={item.bgclass}>
                                    <div className="position-relative">
                                        <div className="shadow rounded pt-4 px-4 img-bg">
                                            <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded-top" alt=""/>
                                        </div>
                                    </div>
        
                                    <div className="pt-3 px-2">
                                        <h5 className="mb-1 fw-normal"><Link href="#" className="text-dark title">{item.name}</Link></h5>
                                        <h6 className="text-muted fw-normal tag mb-0">{item.title}</h6>
                                    </div>                            
                                </div>
                            </div>
                        )
                    })}
                </Masonry>
            </ResponsiveMasonry>
            
        </div>
        </>
    )
}