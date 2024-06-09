import React from "react";
import Link from "next/link";
import Image from "next/image";

import MarketingNavbar from "../componants/navbar/marketingNavbar";
import ClientsThree from "../componants/clients/clientsThree";
import GetInTuchThree from "../componants/getInTuch/getInTuchThree";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import Modal from "../componants/marketing/modal";
import Accordian from "../componants/marketing/accordian";
import Counter from "../componants/marketing/counter";

import {MdArrowForward,FiCodesandbox,FiSend,FiStar,FiBookmark,FiUsers,FiMessageCircle,AiOutlineCheckCircle} from "../assets/icons/vander"


export default function IndexMarketing(){

    return(
        <>
        <MarketingNavbar/>
        <section className="bg-half-170 bg-soft-primary d-flex align-items-center" id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="title-heading">
                            <h6 className="fw-normal">Fronter Marketing</h6>
                            <h4 className="heading fw-semibold text-dark mb-4">Increase Your Business With Fronter</h4>
                            <p className="text-muted para-desc mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                        
                            <div className="subcribe-form mt-4 mb-3 pt-2">
                                <form className="ms-0">
                                    <input type="email" id="email2" name="email" className="rounded-pill bg-white-50 border" placeholder="Your Email Address :"/>
                                    <button type="submit" className="btn btn-pills btn-primary">Try it for free<MdArrowForward className="ms-1"/></button>
                                </form>
                            </div>
                            <span className="text-muted">Looking for help? <Link href="#" scroll={false} className="text-primary">Get in touch with us</Link></span>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="ms-lg-5">
                            <div className="position-relative">
                                <Image src='/images/marketing.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                <Modal/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-5 bg-primary">
            <div className="container">
                <Counter/>
            </div>
        </section>
        <section className="section" id="features">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Instant Smart Solutions <br/> With Fronter</h4>
                            <p className="text-muted para-desc mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                    <FiCodesandbox className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>User Friendly</h5>
                                        <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>
        
                                        <Link href="/page-service-detail" className="link">Read more<MdArrowForward/></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                    <FiSend className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>Super Fast</h5>
                                        <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>
        
                                        <Link href="/page-service-detail" className="link">Read more <MdArrowForward/></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                    <FiStar className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>Insightful Analytics</h5>
                                        <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>
        
                                        <Link href="/page-service-detail" className="link">Read more <MdArrowForward/></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                    <FiBookmark className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>Highly Rated</h5>
                                        <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>
        
                                        <Link href="/page-service-detail" className="link">Read more <MdArrowForward/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>

                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-12 col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                    <FiUsers className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>User Forum Forum</h5>
                                        <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>
        
                                        <Link href="/page-service-detail" className="link">Read more <MdArrowForward/></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                   <FiMessageCircle className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>24/7 Support</h5>
                                        <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>
        
                                        <Link href="/page-service-detail" className="link">Read more <MdArrowForward/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Image src='/images/square/square-warning.png' width={500} height={500} className="img-fluid rounded-pill bg-image-position" alt=""/>
                <Image src='/images/square/square-success.png' width={140} height={140} className="img-fluid rounded-lg avatar avatar-large bg-image-position-2 spin-anything" alt=""/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="me-lg-5">
                            <Image src='/images/shape-image.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title">
                            <h6 className="fw-normal text-primary">Fast & Effective</h6>
                            <h4 className="title mb-4">Powerful Digitalization <br/> With Fronter</h4>

                            <p className="text-muted mb-0">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Fronter network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>
                        
                            <div className="mt-4">
                                <Link href="#" className="btn btn-pills btn-soft-primary">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-md-6 order-1 order-md-2">
                        <div className="text-lg-end">
                            <Image src='/images/svg/revenue-graph-colour.svg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-2 order-md-1">
                        <div className="section-title">
                            <h6 className="fw-normal text-primary">Easy To Track</h6>
                            <h4 className="title mb-4">Fronter Marketing <br/> Analytics For All Expenses</h4>

                            <p className="text-muted">Keep a close track of all your regular expenses with insightful analytics by Fronter. Get graphical representations of your daily spendings, view trendy charts for expenses, pending payments and successful transactions from a single place. Fronter is here to help with all your financial needs.</p>
                        
                            <ul className="list-unstyled text-muted">
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-4">
                                <Link href="#" className="btn btn-pills btn-soft-primary">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section bg-light overflow-hidden">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">See What Our Customers Have To Say</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                        </div>
                    </div>
                </div>
                <ClientsThree/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="me-lg-5 position-relative">
                            <Image src='/images/feature.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid position-relative px-5 z-index-1" alt=""/>
                            <div className="position-absolute top-50 start-50 translate-middle">
                                <Image src='/images/square/square-primary.png' width={500} height={500} className="rounded-pill" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title">
                            <h6 className="text-primary fw-normal">How it work?</h6>
                            <h4 className="title mb-4">Dont wait. <br/> The time will never be just right.</h4>
                            <Accordian/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <GetInTuchThree/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                    <div className="card map border-0">
                        <div className="card-body p-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:"0"}} allowFullScreen title="myFram"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}