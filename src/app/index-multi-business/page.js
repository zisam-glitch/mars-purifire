import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../componants/navbar/navbar";
import Clients from "../componants/clients/clients";
import Blog from "../componants/blog";
import FooterBig from "../componants/footer/footerBig";
import ScrollTop from "../componants/scrollTop";
import ParallaxImage from "../componants/Parallax";
import Modal from "../componants/multi-business/modal";
import Modal2 from "../componants/multi-business/modal2";
import Counter from "../componants/multi-business/counter";
import Accordian from "../componants/multi-business/accordian";

import {BiLogoFacebook, BiLogoInstagram, BiLogoTwitter,BiLogoLinkedinSquare,FiMail,MdOutlineArrowForward, FiPlay, LiaTimesCircleSolid, AiOutlineCheckCircle} from "../assets/icons/vander"
import { featuresData , partnersImg} from "../data/data";

export default function IndexMultiBusiness(){
    return(
        <>
        <div className="tagline bg-white">
            <div className="container">                
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between">
                            <ul className="list-unstyled mb-0">
                                <li className="list-inline-item mb-0"><Link href="#" className="text-muted fw-normal"><FiMail className="fea icon-sm text-primary"/> support@Fronter.com</Link></li>
                            </ul>
                            <ul className="list-unstyled social-icon tagline-social mb-0">
                                <li className="list-inline-item mb-0"><Link href="#"><BiLogoFacebook className="mb-0 icon"/></Link></li>
                                <li className="list-inline-item mb-0"><Link href="#"><BiLogoInstagram className="mb-0 icon"/></Link></li>
                                <li className="list-inline-item mb-0"><Link href="#"><BiLogoTwitter className="mb-0 icon"/></Link></li>
                                <li className="list-inline-item mb-0"><Link href="#"><BiLogoLinkedinSquare className="mb-0 icon"/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Navbar navClass="defaultscroll sticky tagline-height" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>
        <section className="bg-home zoom-image d-flex align-items-center" id="home">
            <div className="bg-overlay image-wrap" id="hero-images" style={{backgroundImage:"url('/images/business/bg01.jpg')"}}></div>
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h4 className="display-5 text-white title-dark mb-4">Build and grow your business</h4>
                            <p className="para-desc text-white-50 mb-0 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                        
                            <div className="mt-4 pt-2">
                                <Link href="" className="btn btn-primary">Work with us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="home-shape-arrow">
                <Link href="#"><i className="mdi mdi-arrow-down arrow-icon text-dark h5 shadow-md"></i></Link>
            </div>
            
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="section" id="features">
            <div className="container">
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
                    {featuresData.map((item,index)=>{
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

                                        <Link href={`/page-service-detail/${item.id}`} className="link">Read more <MdOutlineArrowForward/></Link>
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
        </section>
        <section className="section bg-light" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="about-image position-relative">
                            <Image src='/images/business/about01.jpg' width={0} height={0} sizes="100vw" style={{width:"400px", height:'auto'}} className="img-fluid rounded shadow" alt=""/>

                            <div className="about-image-position">
                                <Image src='/images/business/about02.jpg' width={0} height={0} sizes="100vw" style={{width:"100%", height:'auto'}} className="img-fluid rounded shadow-lg" alt=""/>
                              <Modal/> 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h6 className="text-primary fw-normal">Creative Vision & Mission</h6>
                            <h4 className="title mb-4">We develop & create <br/> digital future.</h4>
                            <p className="text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                            <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                        
                            <div className="mt-4 pt-2">
                                <Link href="#" className="btn btn-primary">Read More <MdOutlineArrowForward/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <Counter/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-md-6 order-1 order-md-2">
                        <div className="ms-lg-5">
                            <Image src='/images/business/about03.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                        </div>
                    </div>

                    <div className="col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title">
                            <h6 className="text-primary fw-normal">How it work?</h6>
                            <h4 className="title mb-4">Dont wait. <br/> The time will never be just right.</h4>
                            <Accordian/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="position-relative" id="cta">
            <ParallaxImage bgImage='/images/digital/bg01.jpg'/>
            <div className="bg-overlay"></div>
            <div className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <Modal2/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section" id="testimonial">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h6 className="text-primary fw-normal mb-2">Testimonial</h6>
                            <h4 className="title mb-4">What our customer <br/> say about us</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>
                <Clients/>
            </div>
         
            <div className="container mt-5">
                <div className="row justify-content-center">
                    {partnersImg.map((item,index) => {
                        return(
                            <div className="col-lg-2 col-md-2 col-6 py-2" key={index}>
                                <div className="text-center">
                                    <Image src={item} width={114} height={80} className="avatar avatar-md-md w-auto" alt=""/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="section bg-light" id="news">
            <div className="container">
                <div className="row mt-lg-4 align-items-center">
                    <div className="col-lg-5 col-md-12 text-center text-lg-start">
                        <div className="section-title mb-4 mb-lg-0 pb-2 pb-lg-0">
                            <h4 className="title mb-4">Pricing Rates</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <Link href="/page-pricing" className="btn btn-primary mt-4">See More</Link>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                        <div className="ms-lg-5">
                            <div className="row g-lg-0 align-items-center">
                                <div className="col-md-6 col-12">
                                    <div className="card pricing-rates starter-plan bg-primary shadow rounded border-0">
                                        <div className="card-body py-5">
                                            <span className="py-2 px-4 d-inline-block bg-soft-danger h6 mb-3 rounded-lg">Startups</span>

                                            <div className="d-flex">
                                                <span className="price text-white title-dark fw-semibold fs-1 mb-0">$29</span>
                                                <small className="text-white-50 align-self-end ms-1 mb-1">/Monthly</small>
                                            </div>

                                            <p className="text-white title-dark mb-0">For startup projects</p>

                                            <ul className="list-unstyled mt-4 mb-0">
                                                <li className="text-white-50 mb-0"><span className="text-danger h5 me-2"><LiaTimesCircleSolid className="align-middle"/></span>Full Access</li>
                                                <li className="text-white-50 mb-0"><span className="text-success h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Source Files</li>
                                                <li className="text-white-50 mb-0"><span className="text-danger h5 me-2"><LiaTimesCircleSolid className="align-middle"/></span>Free Appointments</li>
                                                <li className="text-white-50 mb-0"><span className="text-success h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Enhanced Security</li>
                                            </ul>
                                            
                                            <Link href="#" className="btn btn-danger w-100 mt-4">Buy now</Link>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="col-md-6 col-12 mt-4 pt-2 pt-sm-0 mt-sm-0">
                                    <div className="card pricing-rates shadow rounded border-0">
                                        <div className="card-body py-5">
                                            <span className="py-2 px-4 d-inline-block bg-soft-primary h6 mb-3 rounded-lg">Business</span>

                                            <div className="d-flex">
                                                <span className="price title-dark fw-semibold fs-1 mb-0">$59</span>
                                                <small className="text-muted align-self-end ms-1 mb-1">/Monthly</small>
                                            </div>

                                            <p className="text-muted mb-0">For business projects</p>

                                            <ul className="list-unstyled mt-4 mb-0">
                                                <li className="text-muted mb-0"><span className="text-success h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Full Access</li>
                                                <li className="text-muted mb-0"><span className="text-success h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Source Files</li>
                                                <li className="text-muted mb-0"><span className="text-success h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Free Appointments</li>
                                                <li className="text-muted mb-0"><span className="text-success h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Enhanced Security</li>
                                            </ul>
                                            
                                            <Link href="#" className="btn btn-primary w-100 mt-4">Try it now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Our Blogs or News</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>
                <Blog/>
            </div>
        </section>
        <FooterBig/>
        <ScrollTop/>
        </>
    )
}