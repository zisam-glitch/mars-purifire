'use client'

import React,{useEffect} from "react";
import Link from "next/link"

import PhotographyNavbar from "../componants/navbar/photographyNavbar";
import PhotographyFooter from "../componants/footer/photographyFooter";
import ScrollTop from "../componants/scrollTop";
import ParallaxImage from "../componants/Parallax";

import { MdArrowForward} from "../assets/icons/vander"
import Portfolio2 from "../componants/photography/portfolio2";

export default function PhotographyPortfolio(){
    useEffect(()=>{
        document.body.classList.add('photography-scss');
    })
    
    return(
        <>
        <PhotographyNavbar/>
        <section className="position-relative">
            <ParallaxImage  bgImage='/images/photography/photographer.jpg'/>
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="bg-half-170 ">
                <div className="section-title position-absolute bottom-0 text-center end-0 start-0">
                    <h4 className="title text-white title-dark mb-5">Portfolio</h4>
                </div>
            </div>
        </section>
        <section className="section pt-5">
            <div className="container">
               <Portfolio2/>
                <div className="row">
                    <div className="col mt-4 pt-2">
                        <div className="text-center">
                            <Link href="#" className="btn btn-link primary text-muted">See More <MdArrowForward/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <PhotographyFooter/>
        <ScrollTop/>
        </>
    )
}