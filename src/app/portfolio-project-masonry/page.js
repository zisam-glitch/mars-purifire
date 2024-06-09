'use client'
import React from "react";
import Link from "next/link";

import Navbar from "../componants/navbar/navbar";
import FooterTwo from "../componants/footer/footerTwo";
import ScrollTop from "../componants/scrollTop";
import PortfolioThree from "../componants/portfolio/portfolioThree";
import ParallaxImage from "../componants/Parallax";

import {MdArrowForward} from "../assets/icons/vander"

export default function ProjectMasonry(){
    
    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>
        <section className=" d-table w-100 position-relative">
            <ParallaxImage bgImage='/images/bg/02.jpg'/>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Portfolio & Works</h5>
                                <p className="text-white-50 para-desc mx-auto mb-0">Showcase of Our Awesome Works in Masonry Style</p>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Fronter</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="section">
            <div className="container">
                <PortfolioThree/>
                
                <div className="row justify-content-center">
                    <div className="col-12 mt-4 pt-2">
                        <div className="text-center">
                            <Link href="#" className="btn btn-link primary text-muted h6 mb-0">See More <span className="h5 mb-0 ms-1"><MdArrowForward/></span></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h6 className="text-primary fw-normal mb-3">Available for freelance projects</h6>
                            <h1 className="title mb-4">Do you have digital project? <br/> Lets talk.</h1>
                            <div className="mt-4">
                                <Link href="/page-contact-one" className="btn btn-primary">Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <FooterTwo/>
        <ScrollTop/>
        </>
    )
}