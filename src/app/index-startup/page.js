import Link from "next/link";
import Image from "next/image";

import StartupNavbar from "../componants/navbar/startupNavbar";
import Clients from "../componants/clients/clients";
import Blog from "../componants/blog";
import GetInTuchFour from "../componants/getInTuch/getInTuchFour";
import Footer from "../componants/footer/footer";
import ScrollTop from "../componants/scrollTop";
import ParallaxImage from "../componants/Parallax";
import Modal from "../componants/startup/modal";
import Modal2 from "../componants/startup/modal2";
import Modal3 from "../componants/startup/modal3";

import { featuresData, partnersImg, teamData,sassFeatureData } from "../data/data";
import {MdArrowForward,FiFacebook,FiInstagram, FiTwitter} from "../assets/icons/vander"

export default function IndexStartup(){
    return(
        <>
        <StartupNavbar/>
        <section className="bg-home startup-wrapper d-flex align-items-center overflow-hidden" id="home">
            <div className="bg-overlay bg-transparent" id="overlay" style={{backgroundImage:"url('/images/startup/01.png')"}}></div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="title-heading">
                            <Image src='/images/logo-icon-36.png' width={41} height={36} alt=""/>
                            <h4 className="display-5 fw-bold my-4">Build, Grow, And <br/> Manage Your Brand</h4>
                            <p className="text-muted para-desc mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                             <Modal/>
                        </div>
                        
                        <Image src='/images/square/square-danger.png' width={80} height={80} className="img-fluid rounded-pill bg-image-position avatar avatar-md-md mover-2 z-index-0" alt=""/>
                        <Image src='/images/square/square-success.png' width={80} height={80} className="img-fluid rounded-md avatar avatar-md-md bg-image-position-2 spin-anything z-index-0" alt=""/>
                    </div>
                </div>
                <Image src='/images/square/square-primary.png' width={80} height={80} className="img-fluid rounded-pill position-absolute top-0 start-50 translate-middle-x avatar avatar-md-md zoom-in-out z-index-0" alt=""/>
            </div>
        </section>
        <section className="section-two bg-light">
            <div className="container">
                <div className="row">
                    {sassFeatureData.slice(0,3).map((item,index) =>{
                        let Icon = item.icon 
                        return(
                        <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                            <div className="d-flex features feature-primary">
                                <div className="feature-icon text-center rounded">
                                    <Icon className="icon"/>
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
        </section>
        <section className="section" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="about-image position-relative">
                            <Image src='/images/business/about01.jpg' width={0} height={0} sizes="100vw" style={{width:'400px', height:'auto'}} className="img-fluid rounded shadow" alt=""/>

                            <div className="about-image-position">
                                <Image src='/images/business/about02.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}}  className="img-fluid rounded shadow-lg" alt=""/>
                                <Modal2/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h6 className="text-primary fw-normal">Startup About</h6>
                            <h4 className="title mb-4">We are a Big Team</h4>
                            <p className="text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                            <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                        
                            <div className="mt-4 pt-2">
                                <Link href="#" className="btn btn-primary">Read More <MdArrowForward/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section  py-0 mt-5 mt-100" id="cta">
            <ParallaxImage bgImage='/images/digital/bg01.jpg'/>
            <div className="bg-overlay"></div>
            <div className="container section">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <Modal3/>
                    </div>
                </div>
            </div>
        </section>
        <section className="section bg-soft-primary" id="features">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title text-dark mb-3">Our Services</h4>
                            <p className="text-muted para-dark para-desc mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {featuresData.map((item,index) => {
                        let Icon = item.icon
                        return(
                            <div className="col-lg-4 col-sm-6 mt-4 pt-2" key={index}>
                                <div className="card features feature-primary feature-clean feature-transition p-4 border-0 shadow rounded overflow-hidden">
                                    <div className="icons text-center rounded">
                                        <Icon className="icon mb-0"/>
                                    </div>
                                    <div className="content mt-4">
                                        <Link href={`/page-service-detail/${item.id}`} className="h5 text-dark title">{item.title}</Link>
                                        <p className="text-muted mt-3">{item.desc}</p>

                                        <Link href={`/page-service-detail/${item.id}`} className="link">Read more <MdArrowForward/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
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

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h6 className="text-primary fw-normal mb-2">Our Minds</h6>
                            <h4 className="title mb-4">Management Team</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {teamData.map((item,index)=>{
                        return(
                        <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2" key={index}>
                            <div className="card team team-primary text-center">
                                <div className="card-img team-image d-inline-block mx-auto rounded-pill avatar avatar-ex-large overflow-hidden">
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                    <div className="card-overlay avatar avatar-ex-large rounded-pill"></div>
    
                                    <ul className="list-unstyled team-social mb-0">
                                        <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-pills btn-icon"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                        <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-pills btn-icon"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                        <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-pills btn-icon"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                    </ul>
                                </div>
    
                                <div className="content mt-3">
                                    <Link href="/page-team-detail" className="text-dark h5 mb-0 title">{item.name}</Link>
                                    <h6 className="text-muted mb-0 fw-normal">{item.title}</h6>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
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
        <Footer/>
        <ScrollTop/>
        </>
    )
}
