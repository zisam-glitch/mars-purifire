import React from "react";
import Link from "next/link"
import Image from "next/image"

import CoWorkingNavbar from "../componants/navbar/coworkingNavbar";
import Partners from "../componants/partners";
import Clients from "../componants/clients/clients";
import Blog from "../componants/blog";
import GetInTuchFour from "../componants/getInTuch/getInTuchFour";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import ParallaxImage from "../componants/Parallax";
import CoworkingForm from "../componants/co-working/form";
import Modal from "../componants/co-working/modal";
import CityGallary from "../componants/co-working/cityGallary";


import { services} from "../data/data";

import { MdArrowForward,MdKeyboardArrowRight} from "../assets/icons/vander"
import Tab from "../componants/co-working/tab";

export default function IndexCoWorking(){
    return(
        <>
        <CoWorkingNavbar/>
        <section className="bg-cowork" id="home">
            <div className="container-fluid px-md-3 px-0 ">
                <div className="d-table w-100 rounded-md shadow-md overflow-hidden jarallax position-relative">
                    <ParallaxImage bgImage='/images/cowork/bg.jpg'/>
                    <div className="bg-half-170" >
                        <div className="bg-overlay opacity-2" style={{backgroundImage:"url('/images/svg/map.svg')"}}></div>
                        <div className="bg-overlay bg-linear-gradient-2"></div>
                        <div className="container">
                            <div className="row mt-5 justify-content-center">
                                <div className="col-12">
                                    <div className="title-heading text-center">
                                        <h4 className="heading text-white title-dark mb-4">More Productive <br/> With Co-Working Spaces</h4>
                                        <p className="text-white-50 para-desc mx-auto mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                                    
                                        <div className="mt-4">
                                            <Link href="" className="btn btn-lg btn-pills btn-primary">Pick your desk</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section bg-white" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-5">
                        <div className="card features-absolute border-0 shadow rounded p-4">
                            <CoworkingForm/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-60">
                <div className="row align-items-center">
                    <div className="col-md-5 col-12">
                        <div className="positon-relative">
                            <Image src='/images/cowork/about.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded-md shadow-md" alt=""/>
                            <Modal/>
                        </div>
                    </div>

                    <div className="col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h4 className="title mb-4">Solutions designed for <br/> you and your team</h4>
                            <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy text is also known as fill text. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a ready-made text to sing with the melody.</p>
                            <div className="mt-4">
                                <Link href="" className="btn btn-primary">Learn More <MdArrowForward/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4 pt-2">
                <Partners/>
            </div>
        </section>
        <section className="section bg-light" id="features">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Our Services</h4>
                            <p className="text-muted mb-0 para-desc mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect..</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {services.map((item,index)=>{
                        let Icon = item.icon
                        return(
                            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                                <div className="p-4 text-center">
                                    <span className="text-primary h2"><Icon/></span>
                                    <h5 className="mt-2">{item.title}</h5>
                                    <p className="text-muted mb-0">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}

                    <div className="col-12 mt-4 pt-2 text-center">
                        <Link href="#" className="btn btn-primary">See More<MdArrowForward className="ms-1"/></Link>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <CityGallary/>
                <div className="row justify-content-center">
                    <div className="col-12 text-center mt-4 pt-2">
                        <Link href="#" className="btn btn-primary">See More <MdArrowForward className="ms-1"/></Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row align-items-end mb-4 pb-4">
                    <div className="col-md-8">
                        <div className="section-title text-center text-md-start">
                            <h4 className="title mb-4">We provide solutions for all your needs</h4>
                            <p className="text-muted mb-0 para-desc">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect..</p>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4 mt-sm-0">
                        <div className="text-center text-md-end">
                            <Link href="#" className="text-primary">View more suggesions <MdArrowForward className="ms-1"/></Link>
                        </div>
                    </div>
                </div>
                <Tab/>    
            </div>
        </section>
        <section className="section pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <div className="video-solution-cta position-relative z-index-1">
                            <div className="position-relative">
                                <Image src='/images/cowork/cta.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded-md shadow-lg" alt=""/>
                                <Modal/>
                            </div>
                            <div className="content mt-md-4 pt-md-2">
                                <div className="row justify-content-center">
                                    <div className="col-lg-12 text-center">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 mt-4 pt-2">
                                                <div className="section-title text-md-start">
                                                    <h6 className="text-white-50 fw-normal">Customers needs</h6>
                                                    <h4 className="title text-white title-dark mb-0">Spaces for every size <br/> and type of need.</h4>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-12 mt-4 pt-md-2">
                                                <div className="section-title text-md-start">
                                                    <p className="text-white-50 para-desc">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                                    <Link href="#" className="text-white title-dark">Read More <MdKeyboardArrowRight className="align-middle"/></Link>
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
        </section>
        <section className="section bg-light" id="news">
            <div className="container">
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
        <GetInTuchFour/>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}