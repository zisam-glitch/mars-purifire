import React from "react";
import Link from "next/link"
import Image from "next/image"

import JobNavbar from "../componants/navbar/jobNavbar";
import Partners from "../componants/partners";
import ClientsThree from "../componants/clients/clientsThree";
import Mobileapp from "../componants/mobileApp";
import FooterFive from "../componants/footer/footerFive";
import ScrollTop from "../componants/scrollTop";
import JobForm from "../componants/job/form";
import Modal from "../componants/job/modal";
import Categories from "../componants/job/categories";
import Counter from "../componants/job/counter";

import { jobData} from "../data/data";
import {  brand } from "../data/jobData";


import {MdArrowForward,AiOutlineDollarCircle,AiOutlineClockCircle} from "../assets/icons/vander"

export default function IndexJob(){
    return(
        <>
        <JobNavbar/>
        <section className="bg-half-260 bg-job-hero bg-soft-primary d-table w-100 background-effect overflow-hidden " style={{backgroundImage:"url('/images/bg/job.jpg')"}} id="home">
       
            <div className="container-fluid z-index-1 ">
                <div className="h-100 w-100 position-absolute" style={{backgroundImage:"url('/images/curve-shape.png')",top:"0",left:"0",bottom:"0", right:"0"}}></div>
                <div className="container position-relative z-index-1">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading">
                                <h4 className="heading fw-bold text-dark mb-4">Get your new <br/> dream <span className="text-primary">Job</span> today</h4>
                                <p className="text-muted para-desc mb-0">Find Jobs, Employment & Career Opportunities. Some of the companies weve helped recruit excellent applicants over the years.</p>
                                <div className="row" id="reserve-form">
                                    <div className="col-lg-10 mt-4">
                                        <div className="card feature-top border-0 shadow rounded p-3">
                                            <JobForm/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-4">
                                    <span className="text-muted"><span className="text-dark">Popular Searches :</span> Designer Developer Web IOS PHP Senior Engineer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-overlay bg-soft-primary"></div>
            <ul className="circles p-0 mb-0">
                {brand.map((item,index)=>{
                    return(
                        <li className="brand-img" key={index}><Image src={item} width={45} height={45} className="avatar avatar-md-sm" alt=""/></li>
                    )
                })}
            </ul>
        </section>

        <div className="position-relative">
            <div className="home-shape-arrow">
                <Link href="jobs" spy={true} smooth={true} duration={500}><i className="mdi mdi-arrow-down arrow-icon text-dark h5 shadow-md"></i></Link>
            </div>
        </div>

        <section className="section" id="categories">
            <div className="container">
                <div className="row align-items-end mb-4 pb-2">
                    <div className="col-lg-8 col-md-8">
                        <div className="section-title text-center text-md-start">
                            <h4 className="title mb-md-2 mb-3">Search by Categories</h4>
                            <p className="text-muted para-desc mb-0">Search your career opportunity with our categories</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 d-none d-md-block">
                        <div className="text-md-end">
                            <Link href="#" className="btn btn-link primary text-muted h6 mb-0">All Categories <span className="h5 mb-0 ms-1"><MdArrowForward className="align-middle"/></span></Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-4">
                        <Categories/>
                    </div>

                    <div className="col-12 mt-3 d-md-none d-block">
                        <div className="text-center">
                            <Link href="" className="btn btn-link primary text-muted h6 mb-0">All Categories <span className="h5 mb-0 ms-1"><MdArrowForward className="align-middle"/></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-4 border-top border-bottom">
            <div className="container">
                <Partners/>
            </div>
        </section>

        <section className="section" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="about-image position-relative">
                            <Image src='/images/job01.jpg' width={0} height={0} sizes="100vw" style={{width:'500px', height:'auto'}} className="img-fluid rounded shadow" alt=""/>

                            <div className="about-image-position">
                                <Image src='/images/job02.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow-lg" alt=""/>
                                <Modal/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h6 className="text-primary fw-normal">Job Placement Offers</h6>
                            <h4 className="title mb-4">We are Largest Job <br/> Site in The World</h4>
                            <p className="text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                            <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                        
                            <div className="mt-4 pt-2">
                                <Link href="#" className="btn btn-link primary text-muted h6 mb-0">Read More <span className="h5 mb-0 ms-1"><MdArrowForward/></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <Counter/>
            </div>
        </section>

        <section className="section bg-light" id="jobs">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Popular Jobs</h4>
                            <p className="text-muted mb-0 para-desc mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        </div>
                    </div>
                </div>

                <div className="row g-4 pt-4">
                    {jobData.slice(0,6).map((item,index)=>{
                        return(
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="card features feature-primary rounded shadow">
                                {item?.tag ?  <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small fs-6">New</span></div> :''}
                               
                                <div className="card-body content">
                                    <Link href={`/job-detail/${item.id}`} className="h5 mb-1 d-block title text-dark">{item.title}</Link>
                                    <p className="text-muted"><AiOutlineClockCircle/> {item.posted}</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <span className="badge rounded bg-soft">{item.jobTime}</span>
                                        <div>
                                            <AiOutlineDollarCircle className="link me-1"/>
                                            <span className="text-muted">{item.salary}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center p-4 border-top">
                                    <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm shadow-md rounded-md p-2 bg-white" alt=""/>

                                    <div className="ms-3">
                                        <h6 className="mb-0">{item.name}</h6>
                                        <small className="text-muted">{item.location}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    

                    <div className="col-12 mt-4">
                        <div className="text-center">
                            <Link href="/jobs" className="btn btn-link primary text-muted h6 mb-0">See More Jobs <span className="h5 mb-0 ms-1"><MdArrowForward className="align-middle"/></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section" id="testi">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">What Our Users Say</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        </div>
                    </div>
                </div>

                <ClientsThree position={false}/>
            </div>
            <Mobileapp/>
        </section>
        <FooterFive/>
        <ScrollTop/>
        </>
    )
}
