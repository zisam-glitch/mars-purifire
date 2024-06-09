'use client'
import Image from "next/image";
import Link from "next/link";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { portfolioData } from "../../data/studioData";

export default function Portfolio(){
    return(
        <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
    >
        <Masonry>
        {portfolioData.map((item,index) => {
                return(
                    <div className="picture-item mt-4 pt-2 mx-3" key={index}>
                        <div className={item.proclass}>
                            <div className="position-relative">
                                <div className="shadow p-4 pb-0 img-bg">
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                </div>
                            </div>

                            <div className="pt-3 px-2">
                                <h5 className="mb-1 fw-normal"><Link href={item.link} target="_blank" className="text-dark title">Landrick Personal Portfolio</Link></h5>
                                <h6 className="text-muted fw-normal tag mb-0">Creative</h6>
                            </div>                            
                        </div>
                    </div>
                )
            })}
        </Masonry>
    </ResponsiveMasonry>   
    )
}