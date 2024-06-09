"use client"
import React,{useEffect} from "react";
import Link from "next/link"
import Image from "next/image"

import GymNavbar from "../componants/navbar/gymNavbar";
import Clients from "../componants/clients/clients";
import FooterTwo from "../componants/footer/footerTwo";
import ScrollTop from "../componants/scrollTop";
import GynModal1 from "../componants/gym/gymModal1";
import GynModal2 from "../componants/gym/gymModal2";
import GynModal3 from "../componants/gym/gymModal3";

import { aboutData,teamData,blogData } from "../data/gymData";

import {MdArrowForward, FiFacebook,FiInstagram, FiTwitter, FiLinkedin} from "../assets/icons/vander"
import ParallaxImage from "../componants/Parallax";
import Timetable from "../componants/gym/timetable";
import Gallery from "../componants/gym/gallary";

export default function IndexGym(){
    useEffect(()=>{
        document.body.classList.add('gym-scss');
    })
    return(
        <>
        <GymNavbar/>
        <section className="bg-home d-flex align-items-center "  id="home" style={{backgroundImage:"url('/images/gym/bg1.jpg')", backgroundAttachment:"fixed"}}>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h4 className="heading text-white title-dark mb-4">Build Your Body Strong</h4>
                            <p className="text-white-50 para-desc mx-auto mb-0">Push your fitness further with our mix of facilities and well support you with advice on new and better ways to train.</p>
                            <GynModal1/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section pb-0" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="features-absolute">
                            <div className="row">
                                {aboutData.map((item,index) => {
                                    return(
                                        <div className="col-lg-4 col-md-4 col-12" key={index}>
                                            <div className="card features feature-primary feature-image text-center bg-white rounded shadow-md p-md-5 p-4 overflow-hidden">
                                                <Image src={item.image} width={65} height={65} className="avatar avatar-small d-block mx-auto" alt=""/>

                                                <div className="content mt-4">
                                                    <h4>{item.title}</h4>
                                                    <p className="text-muted mt-3 mb-0">{item.desc}</p>
                                                </div>

                                                <div className="overlay card-img">
                                                    <Image src={item.image1} width={0} height={0} sizes="100vw" style={{width:"100%", height:'auto'}} className="img-fluid" alt=""/>
                                                    <div className="card-overlay"></div>
                                                </div>

                                                <div className="fea-title position-absolute bottom-0 start-0 end-0 text-center mb-4">
                                                    <Link href="#" className="h4 text-white title-dark title">{item.title}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className="section pb-0" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="about-image position-relative">
                            <Image src='/images/gym/about01.jpg' width={0} height={0} sizes="100vw" style={{width:"500px", height:'auto'}} className="img-fluid rounded shadow" alt=""/>

                            <div className="about-image-position">
                                <Image src='/images/gym/about02.jpg' width={0} height={0} sizes="100vw" style={{width:"100%", height:'auto'}} className="img-fluid rounded shadow-lg" alt=""/>
                                <GynModal2/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h5 className="sub-title text-primary fw-normal">Gym & Fitness</h5>
                            <h2 className="title mb-4">Introducing Fronter, <br/> A Fitness Center</h2>
                            <p className="text-muted para-desc">Push your fitness further with our mix of facilities and well support you with advice on new and better ways to train.</p>
                            <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                        
                            <div className="mt-4 pt-2">
                                <Link href="#" className="btn btn-primary">Read More <MdArrowForward/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h5 className="sub-title text-primary fw-normal">Gallery</h5>
                            <h2 className="title mb-4">Take a Sneak Peek Inside</h2>
                            <p className="text-muted para-desc mx-auto mb-0">Push your fitness further with our mix of facilities and well support you with advice on new and better ways to train.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid px-0">
                <Gallery/>
            </div>
        </section>
        <section className="section pb-0" id="schedule">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h5 className="sub-title text-primary fw-normal">Timetable</h5>
                            <h2 className="title mb-4">Gym Schedule</h2>
                            <p className="text-muted para-desc mx-auto mb-0">Push your fitness further with our mix of facilities and well support you with advice on new and better ways to train.</p>
                        </div>
                    </div>
                </div>

               <Timetable/>
            </div>

            
        </section>
        <section className="section"  id="team">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h5 className="sub-title text-primary fw-normal">Team</h5>
                            <h2 className="title mb-4">Gym Trainer</h2>
                            <p className="text-muted para-desc mx-auto mb-0">Push your fitness further with our mix of facilities and well support you with advice on new and better ways to train.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {teamData.map((item, index) => {
                        return(
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                                <div className="card team team-primary team-two text-center">
                                    <div className="card-img team-image d-inline-block mx-auto rounded overflow-hidden">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:'auto'}} className="img-fluid" alt=""/>
                                        <div className="card-overlay rounded"></div>

                                        <div className="content">
                                            <h4 className="mb-0 text-white title-dark fw-normal">{item.name}</h4>
                                            <small className="text-white-50 mb-0 fw-normal mt-1 designation">{item.title}</small>

                                            <ul className="list-unstyled team-social mb-0 mt-3">
                                                <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-pills btn-icon"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                                <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-pills btn-icon"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                                <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-pills btn-icon"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                                <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-pills btn-icon"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className=" position-relative">
           <ParallaxImage bgImage='/images/gym/cta.jpg'/>
            <div className="bg-overlay"></div>
            <div className="bg-half-170">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title text-center text-md-start">
                                <h2 className="mb-4 text-white title-dark">Speak Fitness and</h2>
                                <p className="text-white-50 para-desc mb-0">Push your fitness further with our mix of facilities and well support you with advice on new and better ways to train.</p>
                            
                                <div className="mt-4 pt-2">
                                    <Link href="#" className="btn btn-primary">Purchase Membership</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 order-1 order-md-2">
                            <div className="py-5 py-md-0">
                                <GynModal3/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section pb-0" id="testimonial">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h5 className="sub-title text-primary fw-normal">Testimonial</h5>
                            <h2 className="title mb-4">Trusted by <br/> Our Customers</h2>
                            <p className="text-muted para-desc mb-0 mx-auto">Push your fitness further with our mix of facilities and well support you with advice on new and better ways to train.</p>
                        </div>
                    </div>
                </div>
                <Clients/>
                
            </div>

           
        </section> 
        <section className="section"  id="blog">
        <div className="container ">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h2 className="title mb-4">Our Blogs or News</h2>
                            <p className="text-muted para-desc mb-0 mx-auto">Push your fitness further with our mix of facilities and well support you with advice on new and better ways to train.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    {blogData.map((item,index) =>{
                        return(
                        <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                            <div className="card border-0 blog blog-primary shadow rounded">
                                <div className="card-body p-4">
                                    <ul className="list-unstyled d-flex justify-content-between mb-4">
                                        <li><Link href="" className="link small">{item.tag}</Link></li>
                                        <li className="text-muted small">{item.date}</li>
                                    </ul>
                                    <div className="image position-relative overflow-hidden rounded">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto'}} className="img-fluid rounded" alt=""/>
                                    </div>
                                    <div className="mt-4">
                                        <Link href="#" className="h4 title text-dark d-block fw-normal mb-0">{item.title}</Link>
                                        <p className="text-muted my-2">{item.desc}</p>
                                        <Link href="#" className="link">Read more <MdArrowForward/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <FooterTwo/>
        <ScrollTop/>
        </>
    )
}