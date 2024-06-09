'use client'

import React,{useEffect} from "react";
import Link from "next/link"
import Image from "next/image"

import PhotographyNavbar from "../componants/navbar/photographyNavbar";
import PhotographyFooter from "../componants/footer/photographyFooter";
import ScrollTop from "../componants/scrollTop";
import ParallaxImage from "../componants/Parallax";
import Counter from "../componants/photography/counter";


import { photographyBrandImg } from "../data/data";

import {MdArrowForward} from "../assets/icons/vander"

export default function PhotographyAbout(){
    useEffect(()=>{
        document.body.classList.add('photography-scss');
    })
   
    return(
        <>
        <PhotographyNavbar/>
        <section className="position-relative">
            <ParallaxImage bgImage='/images/photography/photographer.jpg'/>
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="bg-half-170 ">
                <div className="section-title position-absolute bottom-0 text-center end-0 start-0">
                    <h6 className="text-muted title-dark-50 mb-0">Im Jack Jeffrey</h6>
                    <h4 className="title text-white title-dark mb-5">About Me</h4>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="card rounded shadow border-0 overflow-hidden">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-5">
                            <Image src='/images/photography/about.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-7">
                            <div className="card-body section-title p-md-5">
                                <Counter/>

                                <p className="my-4">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>

                                <Link href="/photography-contact" className="btn btn-link primary text-muted">Get in touch<MdArrowForward className="ms-1"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="text-center mb-4">
                            <h4 className="mb-0">Brands</h4>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {photographyBrandImg.map((item, index) => {
                        return(
                            <div className="col-lg-3 col-md-4 col-6" key={index}>
                                <div className="brand-gray text-center">
                                    <Image src={item} width={110} height={110} className="avatar avatar-medium" alt=""/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h6 className="text-muted font-weight-normal">Do you like my work?</h6>
                            <h3 className="fw-semibold my-4">Let’s work together!</h3>
                            <div className="mt-4 pt-2">
                                <Link href="/photography-contact" className="btn btn-primary"> Contact me</Link>
                            </div>
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