import React from "react";
import Link from "next/link";

import Navbar from "../componants/navbar/navbar";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import ParallaxImage from "../componants/Parallax";
import PricingTab from "../componants/pricingTab";

import { pricingFeatureData } from "../data/data";

import {MdArrowForward} from "../assets/icons/vander"
export default function Pricing(){
   
    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>
        <section className="position-relative overflow-hidden">
            <ParallaxImage bgImage='/images/bg/02.jpg'/>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170 d-table w-100">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <p className="text-white-50 para-desc mx-auto mb-0">Our Comfortable Rates</p>
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Pricing / Plans</h5>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Fronter</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Pricing</li>
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
                <div className="row mb-4 pb-2 align-items-end">
                    <div className="col-lg-9 col-md-9">
                        <div className="section-title">
                            <h4 className="title">We create world-class <br/> web design, and <br/> branding.</h4>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 mt-4 mt-sm-0">
                        <div className="text-md-end">
                            <Link href="/page-services" className="btn btn-link primary text-muted h6">See More <span className="h5 mb-0 ms-1"><MdArrowForward/></span></Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {pricingFeatureData.map((item,index) => {
                        let Icon = item.icon
                        return(
                        <div className="col-md-4 col-sm-6 mt-4 pt-2" key={index}>
                            <div className="features feature-primary feature-clean overflow-hidden">
                                <div className="icons text-center rounded">
                                    <Icon className="d-block h4 mb-0 icon"/>
                                </div>
                                <div className="content mt-4">
                                    <Link href="/page-service-detail" className="h5 text-dark title">{item.title}</Link>
                                    <p className="text-muted mt-3">{item.desc}</p>

                                    <Link href="/page-service-detail" className="link">Read more <MdArrowForward/></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <PricingTab/>
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
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}