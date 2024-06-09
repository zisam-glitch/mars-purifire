import React from "react";
import Link from "next/link";
import Image from "next/image";

import PersonalNavbar from "../componants/navbar/personalNavbar";
import GetInTuchTwo from "../componants/getInTuch/getInTuchTwo";
import Footer from "../componants/footer/footer";
import ScrollTop from "../componants/scrollTop";
import ParallaxImage from "../componants/Parallax";
import HeroText from "../componants/personal/heroText";
import Modal from "../componants/personal/modak";
import Projects from "../componants/personal/projects";

import { personalFeaturesData } from "../data/data";

import { partnersImg } from "../data/data";

import {MdArrowForward,MdKeyboardArrowDown} from "../assets/icons/vander"

export default function IndexPersonal(){
    return(
        <>
        <PersonalNavbar/>
        <section className="bg-home personal-hero d-flex align-items-center background-effect overflow-hidden z-index-1" id="home">
            <ParallaxImage bgImage='/images/personal/hero-overlay.png'/>
            <div className="container-fluid position-relative">
                <div className="container position-relative z-index-1">
                    <div className="row mt-5">
                        <div className="col">
                            <div className="title-heading">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 order-2 order-lg-1 mt-4 mt-sm-0">
                                        <div className="rounded personal-hero-para">
                                            <h5 className="mb-3 sub-title">Im Professional Web Developer</h5>
                                
                                            <p className="para-desc para mb-0">Obviously Im a Web Designer. Web Developer with over 3 years of experience.</p>
                                        
                                            <div className="mt-4">
                                                <Link href="#portfolio" className="btn btn-primary">Hire me</Link>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div className="col-lg-4 offset-lg-4 col-md-6 order-1 order-lg-1">
                                       <HeroText/>                           
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="personal-overlay bg-overlay bg-primary-gradient-overlay"></div>
            <ul className="circles p-0 mb-0"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
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
        <div className="container pt-5">
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
        <section className="section" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="position-relative">
                            <Image src='/images/personal/hero.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded-pill shadow img-fluid" alt=""/>
                            <Modal/>

                            <div className="position-absolute top-0 start-0 z-index-m-1">
                                <Image src='/images/svg/dots.svg' width={180} height={180} className="avatar avatar-xl-large" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="ms-lg-5">
                            <div className="section-title">
                                <span className="badge rounded-pill bg-soft-primary">About Me</span>
                                <h4 className="title mt-2 mb-4">Better Design <br/> Better Experience</h4>
                                <p className="para-desc text-muted pb-0">Obviously Im a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                            </div>

                            <div className="progress-box mt-4">
                                <h6 className="title fw-normal text-muted">WordPress</h6>
                                <div className="progress">
                                    <div className="progress-bar position-relative bg-primary" style={{width:"84%"}}>
                                        <div className="progress-value d-block text-muted h6">84%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-box mt-4">
                                <h6 className="title fw-normal text-muted">Angular / JavaScript</h6>
                                <div className="progress">
                                    <div className="progress-bar position-relative bg-primary" style={{width:"79%"}}>
                                        <div className="progress-value d-block text-muted h6">79%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-box mt-4">
                                <h6 className="title fw-normal text-muted">HTML</h6>
                                <div className="progress">
                                    <div className="progress-bar position-relative bg-primary" style={{width:"95%"}}>
                                        <div className="progress-value d-block text-muted h6">95%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section bg-light" id="features">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">What do i offer ?</h4>
                            <p className="para-desc text-muted mx-auto mb-0">Obviously Im a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {personalFeaturesData.map((item,index) => {
                        let Icon = item.icon
                        return(
                            <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-md overflow-hidden">
                                    <Icon className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>{item.title}</h5>
                                        <p className="text-muted mt-3">{item.desc}</p>

                                        <Link href='/page-service-detail' className="link">Read more <MdArrowForward/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="section" id="experience">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <div className="position-relative">
                                <h4 className="title mb-4">Work Experience</h4>
                            </div>
                            <p className="text-muted mx-auto para-desc mb-0">Obviously Im a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-4 pt-2">
                        <div className="timeline-page position-relative">
                            <div className="timeline-item">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="duration date-label-left position-relative text-md-end">
                                            <Image src='/images/brands/shree-logo.png' width={36} height={36} className="rounded-pill avatar avatar-ex-small" alt=""/>
                                            <h5 className="my-2">Self Employed</h5>
                                            <small className="text-muted mb-0">2019-21</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                                        <div className="event event-description-right float-left text-start">
                                            <h6 className="title mb-1 text-capitalize">UX / UI Designer</h6>
                                            <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                            <div className="timeline-item mt-5 pt-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2 mt-4 mt-sm-0">
                                        <div className="event event-description-left float-left text-end">
                                            <h6 className="title mb-1 text-capitalize">Sr. UX / UI Designer</h6>
                                            <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                        <div className="duration duration-right position-relative">
                                            <Image src='/images/brands/google-logo.png' width={36} height={36} className="rounded-pill avatar avatar-ex-small" alt=""/>
                                            <h5 className="my-2">Google Tech.</h5>
                                            <small className="text-muted mb-0">2018-19</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="timeline-item mt-5 pt-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                                        <div className="duration date-label-left position-relative text-md-end">
                                            <Image src='/images/brands/lenovo-logo.png' width={36} height={36} className="rounded-pill avatar avatar-ex-small" alt=""/>
                                            <h5 className="my-2">Lenovo Ltd.</h5>
                                            <small className="text-muted mb-0">2016-18</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                                        <div className="event event-description-right float-left text-start">
                                            <h6 className="title mb-1 text-capitalize">Jr. UX / UI Designer</h6>
                                            <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                            <div className="timeline-item mt-5 pt-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2 mt-4 mt-sm-0">
                                        <div className="event event-description-left float-left text-end">
                                            <h6 className="title mb-1 text-capitalize">Front-end Web Designer</h6>
                                            <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                        <div className="duration duration-right position-relative">
                                            <Image src='/images/brands/circle-logo.png' width={36} height={36} className="rounded-pill avatar avatar-ex-small" alt=""/>
                                            <h5 className="my-2">Circle CI</h5>
                                            <small className="text-muted mb-0">2015-16</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="-bg position-relative overflow-hidden">
            <ParallaxImage  bgImage='/images/personal/cta.jpg'/>
            <div className="bg-overlay bg-primary-gradient-overlay"></div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h4 className="text-light title-dark title mb-2">I Am Available For Freelancer Projects.</h4>
                            <p className="text-light title-dark mx-auto mb-0 para-desc">Obviously Im a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                            <div className="mt-4 pt-2">
                                <Link href="#" className="btn btn-warning mouse-down">Hire me <MdKeyboardArrowDown className=" icon-sm"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section bg-light" id="project">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">My Projects</h4>
                            <p className="para-desc text-muted mx-auto mb-0">Obviously Im a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                        </div>
                    </div>
                </div>

                <Projects/>

                <div className="row justify-content-center">
                    <div className="col-12 mt-4 pt-2">
                        <div className="text-center">
                            <Link href="#" className="btn btn-link primary text-muted h6 mb-0">See More <span className="h5 mb-0 ms-1"><MdArrowForward/></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <GetInTuchTwo/>
        <Footer/>
        <ScrollTop/>
        </>
    )
}