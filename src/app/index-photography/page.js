'use client'

import React,{useEffect} from "react";
import Link from "next/link"
import Image from "next/image"

import PhotographyNavbar from "../componants/navbar/photographyNavbar";
import PhotographyFooter from "../componants/footer/photographyFooter";
import ScrollTop from "../componants/scrollTop";
import ParallaxImage from "../componants/Parallax";
import Portfolio from "../componants/photography/portfolio";

import {MdArrowOutward, MdArrowForward} from "../assets/icons/vander"

export default function IndexPhotography(){
    useEffect(()=>{
        document.body.classList.add('photography-scss');
    })
    return(
        <>
        <PhotographyNavbar/>
        <section className="bg-home d-flex align-items-center position-relative">
            <div className="container-fluid">
                <div className="bg-overlay bg-transparent">
                    <ParallaxImage  bgImage='/images/photography/first.jpg'/>
                </div>
                <div className="bg-overlay bg-transparent d-md-block d-none" >
                    <ParallaxImage bgImage='/images/photography/thomas-lg.png'/>
                </div>
                <div className="bg-overlay bg-transparent d-block d-md-none">
                    <ParallaxImage bgImage='/images/photography/thomas-sm.png'/>
                </div>
                <div className="bg-overlay bg-transparent">
                    <ParallaxImage bgImage='/images/photography/last.png'/>
                </div>
            </div>
            <div className="bg-overlay bg-linear-gradient"></div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Photography</h4>
                            <p className="text-muted para-desc mx-auto mb-0">As a Freelance Designer & Developer, I am here to make you stand out in the digital world and my passion for design and your vision will ensure a great end result.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                        <div className="photo-phase position-relative">
                            <Image src='/images/photography/01.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded img-fluid" alt=""/>
                            <div className="bg-overlay bg-linear-gradient-2 rounded"></div>
                            <Link href="/photography-about" className="fs-5 text-white title-dark link">Jack Jeffrey <MdArrowOutward/></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-lg-5 pt-lg-5 mt-4 pt-2">
                        <div className="photo-phase position-relative">
                            <Image src='/images/photography/02.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded img-fluid" alt=""/>
                            <div className="bg-overlay bg-linear-gradient-2 rounded"></div>
                            <Link href="/photography-portfolio" className="fs-5 text-white title-dark link">Portfolio <MdArrowOutward/></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                        <div className="photo-phase position-relative">
                            <Image src='/images/photography/03.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded img-fluid" alt=""/>
                            <div className="bg-overlay bg-linear-gradient-2 rounded"></div>
                            <Link href="/photography-contact" className="fs-5 text-white title-dark link">Contact <MdArrowOutward/></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-lg-5 pt-lg-5 mt-4 pt-2">
                        <div className="photo-phase position-relative">
                            <Image src='/images/photography/04.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded img-fluid" alt=""/>
                            <div className="bg-overlay bg-linear-gradient-2 rounded"></div>
                            <Link href="#aboutme" className="fs-5 text-white title-dark link">About Me <MdArrowOutward/></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-100 mt-60 " id="aboutme">
                <div className="row overflow-hidden position-relative">
                    <ParallaxImage bgImage='/images/photography/photographer.jpg'/>
                    <div className="bg-half-260 rounded" >
                        <div className="bg-overlay bg-linear-gradient-2"></div>
                        <div className="section-title position-absolute bottom-0 text-center end-0 start-0">
                            <h4 className="title text-white title-dark mb-4">Jack Jeffrey</h4>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center mt-4 pt-2">
                        <div className="col-lg-7">
                            <div className="text-center">
                                <p className="text-muted title-dark fw-semibold">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words.</p>
                                <p className="text-muted">This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
                                <p className="text-muted">Moreover, in Latin only words at the beginning of sentences are capitalized; this means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts</p>
                                <p className="text-muted">If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                                <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions. Due to the age of the Lorem Ipsum text there are no copyright issues to contend with.</p>
                            
                                <div className="mt-4 pt-2">
                                    <Link href="/photography-about" className="btn btn-link primary text-muted">Read More <MdArrowForward/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Portfolio / Photography</h4>
                            <p className="text-muted para-desc mx-auto mb-0">As a Freelance Designer & Developer, I am here to make you stand out in the digital world and my passion for design and your vision will ensure a great end result.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10 mt-4 pt-2">
                      <Portfolio/>
                        <div className="text-center mt-4">
                            <Link href="/photography-portfolio" className="btn btn-link primary text-muted">See More<MdArrowForward className="ms-1"/></Link>
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