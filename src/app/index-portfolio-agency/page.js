import React from "react";
import Link from "next/link"
import Image from "next/image"

import PortfolioAgencyNavbar from "../componants/navbar/portfolioAgencyNavbar";
import DigitalProjectTwo from "../componants/digitalProjectTwo";
import ClientsTwo from "../componants/clients/clientsTwo";
import Footer from "../componants/footer/footer";
import ScrollTop from "../componants/scrollTop";
import ParallaxImage from "../componants/Parallax";
import Gallary from "../componants/portfolio-agency/gallary";
import TextAnimation from "../componants/portfolio-agency/textAnimation";
import Modal from "../componants/portfolio-agency/modal";

import { blogData,portfolioFeaturesData } from "../data/data";

import {MdKeyboardArrowRight,MdArrowForward} from "../assets/icons/vander"

export default function IndexPortfolioAgency(){
    
    return(
        <>
        <PortfolioAgencyNavbar/>
        <section className="bg-half-170 d-table w-100" id="hero">
            <div className="container">
                <div className="row align-items-end mt-5">
                    <div className="col-lg-9 col-md-9">
                        <div className="title-heading">
                            <TextAnimation/>
                            <p className="text-muted para-desc mb-0">Fronter is a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 mt-4 mt-sm-0">
                        <div className="text-md-end">
                            <Link href="#" className="btn btn-pills btn-primary">Read More <span className="h5 mb-0 ms-1"><MdArrowForward className="align-middle"/></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className=" position-relative">
            <ParallaxImage  bgImage='/images/digital/bg02.jpg'/>
            <div className="bg-overlay"></div>
            <div className="bg-half-260">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="position-relative">
                               <Modal/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section" id="services">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">What we offer ?</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Fronter is a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {portfolioFeaturesData.map((item,index) => {
                        let Icon = item.icon
                        return(
                        <div className="col-lg-3 col-md-6 col-12 mt-5" key={index}>
                            <div className="card border-0 text-center features feature-primary feature-clean">
                                <div className="icons bg-lg text-center rounded-lg mx-auto">
                                    <Icon className="icon mb-0"/>
                                </div>
    
                                <div className="content mt-4 pt-2">
                                    <h5><Link href="#" className="title text-dark">{item.title}</Link></h5>
                                    <p className="text-muted">{item.desc}</p>
                                    <Link href="#" className="text-primary">Read More <MdKeyboardArrowRight className="align-middle"/></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="section bg-soft-primary" id="work">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title text-dark mb-4">Latest Works</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Fronter is a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success.</p>
                        </div>
                    </div>
                </div>

                <Gallary/>
                
                <div className="row text-center">
                    <div className="col-12 mt-4 pt-2">
                        <Link href="#" className="btn btn-pills btn-soft-primary">See works</Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="section" id="review">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Clients Review</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Fronter is a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success.</p>
                        </div>
                    </div>
                </div>
                <ClientsTwo position={false}/>
            </div>

             <div className="container mt-100 mt-60" id="blog">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Recent Articles</h4>
                            <p className="text-muted mx-auto para-desc mt-4">Fronter is a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {blogData.slice(0,3).map((item, index) => {
                        return(
                        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                            <div className="card border-0 blog blog-primary shadow rounded">
                                <div className="card-body p-4">
                                    <ul className="list-unstyled d-flex justify-content-between mb-4">
                                        <li><Link href="#" className="link small">{item.tag}</Link></li>
                                        <li className="text-muted small">{item.date}</li>
                                    </ul>
                                    <div className="image position-relative overflow-hidden rounded">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                                    </div>
                                    <div className="mt-4">
                                        <h5><Link href="/blog-standard-post" className="h5 title text-dark d-block mb-0">{item.title}</Link></h5>
                                        <p className="text-muted mb-2">{item.desc}</p>
                                        <Link href="/blog-standard-post" className="link">Read more<MdArrowForward className="align-middle ms-1"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div> 

           <DigitalProjectTwo/>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}