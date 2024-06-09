import React from "react";
import Link from "next/link";
import Image from "next/image";

import SaasNavbar from "../componants/navbar/saasNavbar";
import Partners from "../componants/partners";
import ClientsTwo from "../componants/clients/clientsTwo";
import FooterBig from "../componants/footer/footerBig";
import ScrollTop from "../componants/scrollTop";
import Modal from "../componants/saas/modal";
import Accordion from "../componants/saas/accordian";


import {sassFeatureData, pricingData } from "../data/data";

import {AiOutlineCheckCircle,MdKeyboardArrowRight} from "../assets/icons/vander"

export default function IndexSaas(){

    return(
        <>
        <SaasNavbar/>
        <section className="bg-home bg-primary d-flex align-items-center"  id="home" style={{backgroundImage:"url('/images/saas-shape.png)"}} >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                        <Modal/>
                        <div className="home-dashboard">
                            <Image src='/images/lapy.png' width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto'}} alt="" className="img-fluid"/>
                        </div>

                        <Image src='/images/square/square-white.png' width={80} height={80} className="img-fluid rounded-pill position-absolute top-0 start-50 translate-middle-x avatar avatar-md-md zoom-in-out z-index-0" alt=""/>
                        <Image src='/images/square/square-white.png' width={80} height={80} className="img-fluid rounded-pill bg-image-position avatar avatar-md-md mover-2 z-index-0" alt=""/>
                        <Image src='/images/square/square-white.png' width={80} height={80} className="img-fluid rounded-md avatar avatar-md-md bg-image-position-2 spin-anything z-index-0" alt=""/>
                    </div>
                </div>
            </div>
        </section>

        <section className="section mt-0 mt-md-5 overflow-hidden" id="features">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Our solution for your business</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {sassFeatureData.map((item,index)=>{
                        let Icon = item.icon 
                        return(
                            <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                                <div className="d-flex features feature-primary">
                                    <div className="feature-icon rounded text-center">
                                        <Icon className="icon  h4 mb-0"/>
                                    </div>
                                    <div className="flex-1 ms-4">
                                        <h5 className="mt-0">{item.title}</h5>
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
                    <div className="col-lg-6 col-md-5">
                        <div className="app-feature-shape-left position-relative">
                            <div className="text-center text-md-start">
                                <Image src='/images/app/classic03.png' width={0} height={0} sizes="100vw" style={{width:'350px', height:"auto"}} className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-7 mt-5 mt-sm-0">
                        <div className="section-title">
                            <h1 className="title mb-3">We Build High Performing <br/> Application</h1>
                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                            <ul className="list-unstyled text-muted">
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Create your own skin to match your brand</li>
                            </ul>
                            <div className="mt-4">
                                <Link href="#" className="mt-3 h6 text-primary">Find Out More <MdKeyboardArrowRight/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
                        <div className="section-title">
                            <h1 className="title mb-3">Easy And Best Solution <br/> For Your App</h1>
                            <p className="para-desc text-muted">Launch your Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet eligendi expedita ducimus fuga sed possimus veritatis eum voluptates. Ab ex odio sed atque. Quam delectus, voluptatibus rem harum nihil minus. campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                            <div className="mt-4">
                                <Link href="#" className="btn btn-primary">Learn More <MdKeyboardArrowRight/></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-5 order-1 order-md-2">
                        <div className="app-feature-shape-right position-relative">
                            <div className="text-center text-md-end">
                                <Image src='/images/app/classic03.png' width={0} height={0} sizes="100vw" style={{width:'350px', height:"auto"}} className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">More than 10K+ users are use Fronter</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>
                <Partners/>
            </div>
        </section>
        <section className="section bg-primary" id="testi">
            <div className="container mb-4">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title text-white title-dark mb-4">What our users says !</h4>
                            <p className="text-white-50 para-desc mx-auto mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section pb-0">
            <div className="container">
               <ClientsTwo/>
            </div>
        </section>
        <section className="section" id="pricing">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Pricing Plans</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {pricingData.map((item,index)=>{
                        return(
                            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                                <div className="card pricing price-two rounded text-center border-0 shadow px-4 py-5 bg-white">
                                    <div className="d-flex justify-content-center mb-5">
                                        <span className="mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">{item.price}</span>
                                        <span className="align-self-end mb-1">/Per Month</span>
                                    </div>

                                    <div className="p-2 bg-soft-primary h6 mx-5 rounded-lg">
                                        <span className="text-uppercase">{item.title}</span>
                                    </div>

                                    <ul className="list-unstyled mb-0 mt-4">
                                        {item.subTitle.map((el,index)=>{
                                            return(
                                                <li className="text-muted mt-3" key={index}>{el}</li>
                                            )
                                        })}
                                    </ul>

                                    <div className="mt-4 pt-2">
                                        {item.status === false ? <Link href="#" className="btn btn-light">Start Now</Link> :
                                        <Link href="#" className="btn btn-primary">Start Now</Link>
                                         }
                                        
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
                        <div className="section-title mb-4 pb-2 text-center">
                            <h4 className="title mb-3">Frequently Asked Questions</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-6 mt-4 pt-2">
                        <Image src='/images/faqs.png' width={0} height={0} sizes="100vw" style={{width:"100%", height:'auto'}} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-md-6 mt-4 pt-2">
                        <Accordion/>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="bg-overlay bg-gradient-primary"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h4 className="title text-white title-dark mb-3">Get your free quote today?</h4>
                            <p className="para-desc mx-auto text-white-50">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>

                            <div className="subcribe-form mt-5">
                                <form>
                                    <div className="mb-3">
                                        <input type="email" id="email" className="bg-white rounded-lg opacity-5" required placeholder="Type your mail id..."/>
                                        <button type="submit" className="btn btn-pills btn-primary">Get Started</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterBig/>
        <ScrollTop/>
        </>
    )
}