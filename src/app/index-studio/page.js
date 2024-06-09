import Link from "next/link";

import StudioNavbar from "../componants/navbar/studioNavbar";
import Partners from "../componants/partners";
import Clients from "../componants/clients/clients";
import DigitalProjectTwo from "../componants/digitalProjectTwo";
import FooterTwo from "../componants/footer/footerTwo";
import ScrollTop from "../componants/scrollTop";
import Modal from "../componants/studio/modal";
import Modal2 from "../componants/studio/modal2";
import Tab from "../componants/studio/tab";
import Portfolio from "../componants/studio/portfolio";
import Counter from "../componants/studio/counter";

import { featuresData } from "../data/data";

import {MdArrowForward} from "../assets/icons/vander"


export default function IndexStudio(){

    return(
        <>
        <StudioNavbar/>
        <section className="bg-half-170 bg-soft-primary studio-wrapper d-table w-100 overflow-hidden" id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-7">
                        <div className="title-heading mt-4 me-lg-5">
                            <h1 className="display-5 fw-semibold text-dark mb-3">Bigger, Bolder <br/> <span className="text-primary">& Better</span></h1>
                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                            <div className="mt-4 pt-2">
                                <Link href="#" scroll={false} className="btn btn-primary rounded-0">Company <MdArrowForward/></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <Modal/>
                    </div>
                </div>
            </div>
        </section>
        <section className="section pt-5">
            <div className="container">
                <Partners/>
            </div>
            <div className="container mt-100 mt-60" id="features">
                <div className="row align-items-end">
                    <div className="col-lg-9 col-md-9">
                        <div className="section-title">
                            <h4 className="title">We create world-class <br/> web design, and <br/> branding.</h4>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 mt-4 mt-sm-0">
                        <div className="text-md-end">
                            <Link href="#" className="btn btn-link primary text-muted h6">Read More <span className="h5 mb-0 ms-1"><MdArrowForward/></span></Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 order-2 order-sm-1 mt-4 pt-2">
                        <Counter/>
                    </div>
                    <div className="col-lg-9 order-1 order-sm-2">
                        <div className="row">
                            {featuresData.map((item,index)=>{
                                let Icon = item.icon
                                return(
                                    <div className="col-sm-6 mt-4 pt-2" key={index}>
                                        <div className="features feature-primary feature-clean p-4 border-0 shadow overflow-hidden">
                                            <div className="icons text-center">
                                                <Icon className="d-block h4 mb-0 icon"/>
                                            </div>
                                            <div className="content mt-4">
                                                <Link href={`/page-service-detail/${item.id}`} className="h5 text-dark title">{item.title}</Link>
                                                <p className="text-muted mt-3">{item.desc}</p>
                
                                                <Link href={`/page-service-detail/${item.id}`} className="link">Read more<MdArrowForward/></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
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
                                <div className="bg-half-260 -bg d-table w-100 rounded "  style={{backgroundImage:"url('/images/digital/cta.jpg')", }} >
                               
                                </div>
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
                                                    <Link href="#" className="text-white title-dark">Read More <MdArrowForward/></Link>
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
        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h6 className="text-primary fw-normal">How do we work?</h6>
                            <h4 className="title mb-4">Its all about the <br/> people, and process.</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                        </div>
                    </div>
                </div>

                <Tab/>
            </div>
        </section>
        <section className="section pb-0" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col picture-item">
                        <div className="section-title mb-4 pb-2">
                            <h6 className="text-primary fw-normal">Portfolio</h6>
                            <h4 className="title mb-4">Read some amazing <br/> case studies.</h4>
                            <p className="text-muted para-desc mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                        </div>
                    </div>
                </div>
                <Portfolio/>

                <div className="row justify-content-center">
                    <div className="co-12 mt-4">
                        <div className="text-md-center">
                            <Link href="#" className="btn btn-link primary h6">Read More <span className="h5 mb-0 ms-1"><MdArrowForward/></span></Link>
                        </div>
                    </div>
                </div>
            </div>

           
        </section>
        <section className="section" id="review">
            <div className="container" >
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
            <DigitalProjectTwo/>
        </section>
        <FooterTwo/>
        <ScrollTop/>
        </>
    )
}
