import React from "react";
import Link from "next/link";

import Navbar from "../componants/navbar/navbar";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import FaqTab from "../componants/faqTab";
import ParallaxImage from "../componants/Parallax";

import {faqData} from "../data/data"


export default function Faqs(){
   
    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>
        <section className="position-relative overflow-hidden">
            <ParallaxImage bgImage='/images/bg/03.jpg'/>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170 d-table w-100">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <p className="text-white-50 para-desc mx-auto mb-0">FAQs</p>
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Frequently Asked Questions</h5>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Fronter</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">FAQs</li>
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
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="mb-4">Find the help you need</h4>
                            <p className="para-desc mx-auto text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {faqData.map((item,index)=>{
                        let Icon = item.icon
                        return(
                            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                                <div className="card border-0 text-center features feature-primary feature-clean mx-md-5 mx-4">
                                    <div className="icons text-center rounded mx-auto">
                                        <Icon className="icon d-block h4 mb-0"/>
                                    </div>
                                    <div className="content mt-4">
                                        <Link href="/page-faqs" className="title h5 text-dark">{item.title}</Link>
                                        <p className="text-muted mt-3 mb-0">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="mb-4">Get Started</h4>
                            <p className="para-desc mx-auto text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-9 mt-4 pt-2">
                        <FaqTab/>
                    </div>
                </div>
            </div>
        </section>
        <section className="section bg-soft-primary">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-9 col-md-6 col-12">
                        <div className="section-title text-md-start text-center">
                            <h4 className="title text-dark mb-4">We enjoy building experiences. <br/> Come and join us.</h4>
                            <p className="text-muted para-desc mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="text-md-end text-center">
                            <Link href="/page-contact-one" className="btn btn-primary">Get In Touch!</Link>
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