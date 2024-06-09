import React from "react";
import Link from "next/link";

import Navbar from "../componants/navbar/navbar";
import ClientsTwo from "../componants/clients/clientsTwo";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";

import { featuresData} from "../data/data";
import {MdArrowForward} from "../assets/icons/vander"

import ParallaxImage from "../componants/Parallax";
import Project from "../componants/services/project";

export default function PageServices(){

    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>
        <section className="position-relative overflow-hidden">
            <ParallaxImage  bgImage='/images/bg/05.jpg'/>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170 d-table w-100">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <p className="text-white-50 para-desc mx-auto mb-0">What we offer?</p>
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Our Services</h5>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Fronter</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">services</li>
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
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="section-title">
                            <h6 className="text-primary fw-normal">Welcome to Fronter</h6>
                            <h4 className="title">Fronter Is The Perfect <br/> Choice For Your Business <br/> Software Needs.</h4>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <p className="text-muted mb-0">The most well-known dummy text is the originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible Latin script. The advantage of its Latin origin and the relative does not attract attention to itself or distract the viewers attention from the layout.</p>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h6 className="text-primary fw-normal">Who we are?</h6>
                            <h4 className="title mb-4">Business strategies and top <br/> performance ideas</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {featuresData.map((item,index) =>{
                        let Icon = item.icon
                        return(
                            <div className="col-lg-4 col-sm-6 mt-4 pt-2" key={index}>
                                <div className="card features feature-primary feature-clean feature-transition p-4 border-0 shadow rounded overflow-hidden">
                                    <div className="icons text-center rounded">
                                        <Icon className="icon d-block rounded h4 mb-0"/>
                                    </div>
                                    <div className="content mt-4">
                                        <Link href={`/page-service-detail/${item.id}`} className="h5 text-dark title">{item.title}</Link>
                                        <p className="text-muted mt-3">{item.desc}</p>

                                        <Link href={`/page-service-detail/${item.id}`} className="link">Read more <MdArrowForward/></Link>
                                    </div>

                                    <div className="feature-ovelay-one"></div>
                                    <div className="feature-ovelay-two"></div>
                                    <div className="feature-ovelay-three"></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Latest Projects & Works</h4>
                            <p className="para-desc text-muted mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-4 pt-2" id="slider-container">
                <div className="row slider-row-width">
                    <div className="col-12">
                        <Project/>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h6 className="text-primary fw-normal mb-2">Testimonial</h6>
                            <h4 className="title mb-4">What our customer <br/> say about us</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <ClientsTwo position={false}/>
            </div>
        </section>
        <section className="position-relative overflow-hidden">
            <ParallaxImage bgImage='/images/digital/bg01.jpg'/>
            <div className="bg-overlay"></div>
            <div className="section">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-9 col-md-6 col-12">
                            <div className="section-title text-md-start text-center">
                                <h4 className="title title-dark text-white mb-4">We enjoy building experiences. Come and join us.</h4>
                                <p className="text-light para-dark para-desc mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-md-end text-center">
                                <Link href="/page-contact-one" className="btn btn-primary">Get In Touch!</Link>
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
