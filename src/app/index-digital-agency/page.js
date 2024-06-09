import React from "react";
import Link from "next/link";
import Image from "next/image";

import DigitalNavbar from "../componants/navbar/digitalAgencyNavbat";
import DigitalProject from "../componants/digitalProject";
import Clients from "../componants/clients/clients";
import FooterThree from "../componants/footer/footerThree";
import ScrollTop from "../componants/scrollTop";
import ParallaxImage from "../componants/Parallax";
import Contact from "../componants/digital-agency/contact";
import Modal from "../componants/digital-agency/modal";
import Modal2 from "../componants/digital-agency/modal2";
import TextAnimation from "../componants/digital-agency/textAnimation";

import {MdArrowForward,MdKeyboardArrowRight} from "../assets/icons/vander"
import {partnersImg} from "../data/data"

import { featuresData, productData } from "../data/agencyData";

export default function IndexDigitalAgency(){

    return(
        <>
        <DigitalNavbar/>
        <section className="bg-half-170 d-table w-100" id="home">
            <div className="container">
                <div className="row mt-5 align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="title-heading">
                            <Image src='/images/logo-icon-32.png' width={36} height={32} alt=""/>
                            <h6 className="text-primary fw-normal mt-4">We are a very dedicated team</h6>
                            <h4 className="heading mb-4">We are a full-service digital agency</h4>
                            <p className="text-muted para-desc mb-0">We collaborate with people, teams, and businesses to develop design systems, strategies, and processes to do a better creative work everyday.</p>
                            <Modal/>
                        </div>
                    </div>

                    <div className="col-lg-6 offset-lg-1 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="row g-3 align-items-center">
                            <div className="col-lg-5 col-6">
                                <div className="row g-3">
                                    <div className="col-lg-12 col-md-12">
                                        <Image src='/images/digital/02.jpg' className="img-fluid rounded-md" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt=""/>
                                    </div>
    
                                    <div className="col-lg-12 col-md-12 text-end">
                                        <Image src='/images/square/square-warning.png' width={110} height={110} className="avatar avatar-medium img-fluid rounded-md" alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 col-6">
                                <Image src='/images/digital/01.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded-md" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="container">
            <div className="row">
                <div className="col text-center mb-4">
                    <h6 className="fw-normal text-muted">We are very fortunate to work with these amazing partners</h6>
                </div>
            </div>

            <div className="row justify-content-center">
                {partnersImg.map((item,index)=>{
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
        <section className="section -fluid  overflow-hidden position-relative">
            <ParallaxImage bgImage='/images/digital/bg01.jpg'/>
            <div className="container py-5 mt-md-5 mt-0">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card bg-white rounded-md">
                            <div className="card-body">
                                <h6 className="text-primary fw-normal mb-2">Fronter Digital Agency</h6>
                                <TextAnimation/>
                                <p className="text-muted mb-0">Certain internet providers exploit the fact that fill text cannot be recognized by automatic search engines - meaningful information cannot be distinguished from meaningless.</p>
                                <Contact title='Get a project?'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section" id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Agency Features</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {featuresData.map((item,index) =>{
                        let Icon = item.icon
                        return(
                            <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                                <div className={item.background}>
                                    <div className="icons bg-lg rounded-lg text-center mx-auto">
                                        <Icon className="d-block icon h2 mb-0"/>
                                    </div>
                                    <div className="content mt-4 pt-2">
                                        <h5 className="mb-3">{item.title}</h5>
                                        <p className="text-muted mb-0">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="row g-3 align-items-center">
                            <div className="col-lg-7 col-6">
                                <Image src='/images/digital/03.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded-md" alt=""/>
                            </div>
                            
                            <div className="col-lg-5 col-6">
                                <div className="row g-3">
                                    <div className="col-lg-12 col-md-12">
                                        <Image src='/images/digital/04.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded-md" alt=""/>
                                    </div>
    
                                    <div className="col-lg-12 col-md-12">
                                        <Image src='/images/square/square-success.png' width={110} height={110} className="avatar avatar-medium img-fluid rounded-md" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 offset-lg-1 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                            <h6 className="text-primary fw-normal mb-2">Web and mobile development</h6>
                            <h4 className="title mb-4">Analyze your entire market <br/> pricing & stock availability</h4>
                            <p className="text-muted para-desc mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        
                            <div className="mt-4">
                                <Contact title='Contact us'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <div className="video-solution-cta position-relative z-index-1">
                          
                            <div className="position-relative">
                                <Image src='/images/digital/cta.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded-md shadow-lg" alt=""/>
                               <Modal2/>
                            </div>
                            <div className="content mt-md-4 pt-md-2">
                                <div className="row justify-content-center">
                                    <div className="col-lg-12 text-center">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 mt-4 pt-2">
                                                <div className="section-title text-md-start">
                                                    <h6 className="text-white-50 fw-normal">Fronter Agency</h6>
                                                    <h4 className="title text-white title-dark mb-0">We are a full-service <br/> digital company</h4>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-12 mt-4 pt-md-2">
                                                <div className="section-title text-md-start">
                                                    <p className="text-white-50 para-desc">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                                    <Link href="" className="text-white title-dark">Read More <MdArrowForward  className="align-middle"/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-posts-placeholder bg-primary"></div>
            </div>
        </section>
        <section className="section pb-0" id="testimonial">
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
        </section>
        <section className="section" id="products">
            <div className="container mt-100 mt-60" id="products">
                <div className="row align-items-end">
                    <div className="col-md-8">
                        <div className="section-title text-center text-md-start">
                            <h6 className="text-primary fw-normal">Agency Products</h6>
                            <h4 className="title mb-4">Our Digital Product</h4>
                            <p className="text-muted mb-0 para-desc">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4 mt-sm-0">
                        <div className="text-center text-md-end">
                            <Link href="#" scroll={false} className="text-primary h6">See More <MdKeyboardArrowRight className="align-middle"/></Link>
                        </div>
                    </div>
                </div>

                <div className="row" id="grid">
                    {productData.map((item,index) => {
                        return(
                            <div className="col-lg-4 col-md-6 picture-item mt-5 pt-2" key={index}>
                                <div className={item.background}>
                                    <div className="position-relative">
                                        <div className="shadow rounded pt-4 px-4 img-bg">
                                            <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto'}} className="img-fluid rounded-top" alt=""/>
                                        </div>
                                    </div>

                                    <div className="d-flex pt-3 px-3 align-items-center">
                                        <div className="flex-1">
                                            <Link href="#" scroll={false} className="title mb-0 h6 d-block text-dark">{item.name}</Link>
                                            <span className="text-muted">{item.title}</span>
                                        </div>

                                        <span className="fs-5 link fw-semibold">{item.price}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <DigitalProject/>
        </section>
        <FooterThree/>
        <ScrollTop/>
        </>
    )
}